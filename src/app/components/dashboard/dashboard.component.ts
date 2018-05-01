import { Component, OnInit } from '@angular/core';
import { MyFireService } from '../../providers/myfire.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	paymentsRef: any;
	paymentList: any = [];

	constructor(private myFire: MyFireService) { }

	ngOnInit() {
		const uid = firebase.auth().currentUser.uid;
		this.paymentsRef = this.myFire.getUserPaymentRef(uid);
		console.log(uid);
		this.paymentsRef.on('child_added', payment =>{
			this.paymentList.push({
				key: payment.key,
				payment: payment.val()
			});

			console.log('dashboard payments', this.paymentList);
		});

		this.paymentsRef.on('child_removed', deleted =>{
			this.paymentList = this.paymentList.filter(payment=> payment.key !== deleted.key);
		});
	}

	ngOnDestroy(){
		this.paymentsRef.off();
	}

}
