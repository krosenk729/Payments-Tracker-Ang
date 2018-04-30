import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyFireService } from '../../providers/myfire.service';
import * as firebase from 'firebase';
import * as Moment from 'moment';

@Component({
	selector: 'app-payment-new',
	templateUrl: './payment-new.component.html'
})
export class PaymentNewComponent implements OnInit {
	newPaymentForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private myFire: MyFireService) { }

	setForm() {
		this.newPaymentForm = this.formBuilder.group({
			name: ['My Monthly Subscription', Validators.required],
			url: '',
			cost: ['11', Validators.required],
			freq: 'Monthly',
			startDate: [moment().format('YYYY-MM-DD'), Validators.required]
		});
	}

	onFormSubmit(){
		if(this.newPaymentForm.status === "VALID"){
			const uid = firebase.auth().currentUser.uid;
			const paymentsRef = this.myFire.getUserPaymentRef(uid);
			this.myFire.handleNewPayment( this.newPaymentForm.value, uid );
			this.setForm();
		}
	}

	ngOnInit() {
		this.setForm();
	}

}
