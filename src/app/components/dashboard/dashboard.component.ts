import { Component, OnInit } from '@angular/core';
import { MyFireService } from '../../providers/myfire.service';
import * as firebase from 'firebase';
import * as Moment from 'moment';

interface FirebasePayment {
	key: string,
	payment: {
		name: string,
		uid: string,
		cost: number,
		freq: string,
		startDate: string,
		ampm?: string,
		url?: string
	}
}

interface PaymentEvents {
	key: string,
	name: string,
	date: string,
	cost: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	paymentsRef: any;
	paymentList: FirebasePayment[] = [];
	paymentEventList: any[] = [];

	constructor(private myFire: MyFireService) {}

	ngOnInit() {
		const uid = firebase.auth().currentUser.uid;
		this.paymentsRef = this.myFire.getUserPaymentRef(uid);
		this.paymentsRef.on('child_added', payment =>{
			this.paymentList.push({
				key: payment.key,
				payment: payment.val()
			});

			this.paymentEventList.push(this.paymentToEventList({
				key: payment.key,
				payment: payment.val()
			}));
		});

		this.paymentsRef.on('child_removed', deleted =>{
			this.paymentList = this.paymentList.filter(payment=> payment.key !== deleted.key);
			this.paymentEventList = this.paymentEventList.filter(eventList=> (eventList[0] || eventList[0].key !== deleted.key));
		});
	}

	ngOnDestroy(){
		this.paymentsRef.off();
	}

	paymentToEventList(passed: FirebasePayment): PaymentEvents[]{
	// each payment is transformed from
	// {name:..., cost:..., startDate:...}
	// to
	// [{cost:..., date:...}, {cost:..., date:...}, ...]
	const payment = passed.payment;
	const momentConv = payment.freq.replace('ily', 'ys').replace('ly', 's').toLowerCase();
	let numOccur = Math.max(0, Moment().endOf('year').diff(Moment(payment.startDate) , momentConv ));
	
	return new Array(numOccur)
		.fill(payment.startDate)
		.map((date, indx)=>{
			return {
				key: passed.key,
				name: payment.name,
				date: Moment(date).add(indx, momentConv).format('YYYY-MM-DD'),
				cost: payment.cost
			}
		});
	}

}
