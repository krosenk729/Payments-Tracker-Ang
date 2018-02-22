import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-payments-details',
	templateUrl: './payments-details.component.html',
	styleUrls: ['./payments-details.component.css']
})
export class PaymentsDetailsComponent implements OnInit {
	@Input() payment: any;
	paymentDetails: any;
	pid: any;
	freqOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
	constructor() { }

	onFreqChange(newVal){
		console.log('new val', newVal);
		this.paymentDetails.freq = newVal;
	}

	onPaymentChange(key, newVal){
		console.log('key/val change', key, newVal);
	}

	ngOnInit() {
		this.paymentDetails = {...this.payment.payload.val()};
		// console.log(this.paymentDetails);
		this.pid = this.payment.key;
	}

}
