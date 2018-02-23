import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

	constructor(private route: ActivatedRoute, private firebase: FirebaseService) { }

	ngOnInit() {
		this.route.parent.params.subscribe(params =>{
			this.uid = params['id'];
			this.payments$ = this.firebase.subscribePayment(params['id']);
		});
	}

}
