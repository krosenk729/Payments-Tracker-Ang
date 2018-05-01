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
	nextDate: string = Moment().format('YYYY-MM-DD');

	constructor(private myFire: MyFireService) { }

	ngOnInit() {
		this.pid = this.payment.key;
		this.paymentDetails = this.payment.payment;
	}

	ngDoCheck(){
		this.checkDate();
	}

	checkDate(){
		console.log('checkdate', Moment().format('mm:ss'), this.paymentDetails);

		// if start in past, calculate next payment
		// if start in future, let next payment equal future date
		if( this.paymentDetails && Moment().isBefore(this.paymentDetails.startDate) ){
			this.nextDate = Moment( this.paymentDetails.startDate ).format('MM/DD/YYYY');
		} else {
			const diff = Moment().diff( this.paymentDetails.startDate, this.paymentDetails.freq );
			this.nextDate = Moment( this.paymentDetails.startDate ).add( diff, this.paymentDetails.freq ).format('MM/DD/YYYY');
		}
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
