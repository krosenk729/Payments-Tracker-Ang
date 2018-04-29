import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyFireService } from '../../providers/myfire.service';
import * as firebase from 'firebase';

@Component({
	selector: 'app-payment-new',
	templateUrl: './payment-new.component.html'
})
export class PaymentNewComponent implements OnInit {
	newPaymentForm: FormGroup;
	constructor(private formBuilder: FormBuilder, private myFire: MyFireService) { }

	createForm() {
		this.newPaymentForm = this.formBuilder.group({
			name: ['', Validators.required],
			url: '',
			cost: ['', Validators.required],
			freq: '',
			startDate: ['', Validators.required]
		});
	}

	onFormSubmit(){
		if(!this.newPaymentForm.errors){
			this.myFire.handleNewPayment( this.newPaymentForm.value );
			this.newPaymentForm.reset();
		}
		console.log( this.newPaymentForm );
	}

	ngOnInit() {
		this.createForm();
	}

}
