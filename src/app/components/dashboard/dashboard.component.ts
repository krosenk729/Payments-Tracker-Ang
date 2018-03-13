import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';
import * as firebase from 'firebase';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
	// https://www.fusioncharts.com/angular4-fusioncharts/
	// https://fusioncharts.github.io/angular4-fusioncharts/
	chartData: any = [];
	paymentsRef: any;
	uid: string;

	constructor(private firebase: FirebaseService) { }

	ngOnInit() {
		this.uid = firebase.auth().currentUser.uid;
		this.paymentsRef = firebase.database().ref('payments').child(this.uid);
		this.paymentsRef.on('child_added', data => {
			console.log('data ... ', data);
			this.chartData.push({
				key: data.key,
				data: data.val()
			});
		});
	}

	ngOnDestroy(){
		this.paymentsRef.off();
	}
}
