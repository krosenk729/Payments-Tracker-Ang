import { Component, OnInit, Input } from '@angular/core';
// import * as Moment from 'moment';
// import { MyFireService } from '../../providers/myfire.service';

@Component({
	selector: 'app-payment-details',
	templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit {
	@Input() payment;
	paymentDetails: object = {};

	constructor() { }

	ngOnInit() {
		console.log(this.payment);
	}

}
