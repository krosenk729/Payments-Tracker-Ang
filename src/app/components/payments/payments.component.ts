import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import { FirebaseService } from '../../providers/firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-payments',
	templateUrl: './payments.component.html',
	styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
	uid: any;
	payments$: Observable<any[]>;

	constructor(
		private route: ActivatedRoute, 
		public auth: AuthService, 
		private firebase: FirebaseService
		) {
			// console.log( 'constructor uid', this.auth.getUserId() );
			// this.payments$ = this.auth.subscribePayments();
		}

	ngOnInit() {
		this.route.parent.params.subscribe(params =>{
			this.uid = params['id'];
			this.payments$ = this.firebase.subscribePayment(params['id']);
			this.payments$ = this.auth.subscribePayments();
		});
	}

}
