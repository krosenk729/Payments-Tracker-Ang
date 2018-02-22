import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../providers/firebase.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-payments',
	templateUrl: './payments.component.html',
	styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
	private uid: any;
	payments$: Observable<any[]>;

	constructor(private route: ActivatedRoute, private firebase: FirebaseService) { }

	ngOnInit() {
		this.route.parent.params.subscribe(params =>{
			this.uid = params['id'];
		});

		this.payments$ = this.firebase.subscribePayment(this.uid);
	}

	addToFirebase(p){
		// console.log('parentvalue', val);
		this.firebase.sendPayment(p, this.uid);
	}

	removeFromFirebase(pid){
		// console.log('parentvalue', val);
		this.firebase.delPayment(pid);
	}

}
