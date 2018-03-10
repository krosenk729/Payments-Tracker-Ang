import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';
import * as Moment from 'moment';


@Component({
	selector: 'app-payments-details',
	templateUrl: './payments-details.component.html',
	styleUrls: ['./payments-details.component.css']	
})
export class PaymentsDetailsComponent implements OnInit {
	@Input() payment;
	paymentDetails: any;
	pid: any;
	freqOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
	constructor(private firebase: FirebaseService) { }

	onFreqChange(newVal){
		console.log('new val', newVal);
		this.paymentDetails.freq = newVal;
		this.onPaymentChange(newVal, 'freq');
	}

	onPaymentChange(event, type){
		console.log('key/val change', event, type);
		console.log( {[type]: event} );
		this.firebase.sendPayment({[type]: event}, this.paymentDetails.uid, this.pid);
	}

	onPaymentDelete(){
		console.log('deleting ', this.pid);
		this.firebase.delPayment(this.pid);
	}

	testUrl(str = '0'){
		let regxp = new RegExp('^(http(s)?(:\/\/))?(www\.)?[a-zA-Z0-9-_\.]+(\.[a-zA-Z0-9]{2,})([-a-zA-Z0-9:%_\+.~#?&//=]*)');
		return str.match(regxp);
	}

	calcNextPayment(){
		return Moment().format();
	}

	ngOnInit() {
		this.paymentDetails = {...this.payment.payload.val()};
		this.pid = this.payment.key;
	}

}
