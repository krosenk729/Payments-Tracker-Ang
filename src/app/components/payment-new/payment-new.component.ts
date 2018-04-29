import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-payment-new',
	templateUrl: './payment-new.component.html'
})
export class PaymentNewComponent implements OnInit {
	newPaymentForm: FormGroup;
	constructor(private formBuilder: FormBuilder) { }

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
		console.log( this.newPaymentForm );
	}

	ngOnInit() {
		this.createForm();
	}

}
