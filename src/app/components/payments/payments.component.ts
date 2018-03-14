import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyFireService } from '../../providers/myfire.service';
import { Observable } from "rxjs/Rx";
import * as firebase from 'firebase';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit, OnDestroy {
	paymentsRef: any;
	paymentList: any = [];

  constructor(private myFire: MyFireService) { }

  ngOnInit() {
	const uid = firebase.auth().currentUser.uid;
	this.paymentsRef = this.myFire.getUserPaymentRef(uid);
	console.log(uid);
	// this.paymentsRef.on('child_added', payment =>{
	// 	this.paymentList.push({
	// 		key: payment.key,
	// 		payment: payment.val()
	// 	});
	// 	console.log(this.paymentList);
	// });
  }

  ngOnDestroy(){
  	this.paymentsRef.off();
  }

}
