import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { MyFireService } from '../../providers/myfire.service';
import * as Moment from 'moment';

@Component({
	selector: 'app-payment-details',
	templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit, DoCheck {
	@Input() payment;
	pid: string = null;
	paymentDetails: any = {};
	freqOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
	
	nextDate: string = Moment().format('MM/DD/YYYY');
	momentConv: string = 'days';

	constructor(private myFire: MyFireService) { }

	ngOnInit() {
		this.pid = this.payment.key;
		this.paymentDetails = this.payment.payment;
	}

	ngDoCheck(){
		if(this.paymentDetails.startDate){
			this.momentConv = this.paymentDetails.freq.replace('ily', 'ys').replace('ly', 's').toLowerCase();
			this.checkDate();
		} 
	}

	checkDate(){
		console.log('checkdate', this.momentConv, Moment().format('mm:ss'), this.paymentDetails);
	}

	onFreqChange(newVal){
		this.myFire.handlePaymentChange(this.pid, 'freq', newVal);
	}

	onPaymentChange(newVal, key){
		this.myFire.handlePaymentChange(this.pid, key, newVal);
	}
	
	onPaymentDelete(){
		this.myFire.handlePaymentDelete(this.pid);
	}

	testUrl(str = '0'){
		let regxp = new RegExp('^(http(s)?(:\/\/))?(www\.)?[a-zA-Z0-9-_\.]+(\.[a-zA-Z0-9]{2,})([-a-zA-Z0-9:%_\+.~#?&//=]*)');
		return str.match(regxp);
	}
}
