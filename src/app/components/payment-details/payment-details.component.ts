import { Component, OnInit,, Input } from '@angular/core';


@Component({
	selector: 'app-payment-details',
	templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit {
	@Input() payment;

	constructor() { }

	ngOnInit() {
	}

}
