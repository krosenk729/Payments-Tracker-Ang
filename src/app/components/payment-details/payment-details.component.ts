import { Component, OnInit, Input } from '@angular/core';
import { MyFireService } from '../../providers/myfire.service';
import * as Moment from 'moment';

@Component({
	selector: 'app-payment-details',
	templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit {
	@Input() payment;
	pid: string = null;
	paymentDetails: object = {};
	freqOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

	constructor(private myFire: MyFireService) { }

	ngOnInit() {
		this.pid = this.payment.key;
		this.paymentDetails = this.payment.payment;
		console.log(this.payment);
		console.log('payment details', Moment().format('MM-DD-YYYY') );
	}

	onFreqChange(newVal){
		console.log(newVal);
		console.log(this.pid);
	}

	onPaymentChange(event, type){
		console.log(event, type);
	}
	
	onPaymentDelete(){
		this.myFire.handlePaymentDelete(this.pid);
	}

	testUrl(str = '0'){
		let regxp = new RegExp('^(http(s)?(:\/\/))?(www\.)?[a-zA-Z0-9-_\.]+(\.[a-zA-Z0-9]{2,})([-a-zA-Z0-9:%_\+.~#?&//=]*)');
		return str.match(regxp);
	}
}
