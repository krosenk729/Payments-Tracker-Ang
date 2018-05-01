import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFireService } from '../../providers/myfire.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
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
		});
		
		this.paymentsRef.on('child_removed', deleted =>{
			this.paymentList = this.paymentList.filter(payment=> payment.key !== deleted.key);
		});
	}

	ngOnDestroy(){
		this.paymentsRef.off();
	}

}
