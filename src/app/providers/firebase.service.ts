import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
	paymentRef: AngularFireList<any>;
	
	constructor(private db: AngularFireDatabase) {
		this.paymentRef = db.list('payments');
	}

	subscribePayment(uid): Observable<any[]>{
		return this.db.list('payments', r => r.orderByChild('uid').equalTo(uid)).snapshotChanges();
	}

	sendPayment(p, uid, pid = ''){
		if(!pid){
			this.paymentRef.push({...p, uid});
		} else {
			this.paymentRef.update(pid, {...p, uid});
		}
	}

	delPayment(pid){
		this.paymentRef.remove(pid);
		console.log('deleted?');
	}

	getTestPayment(uid){
		return [{
					name: 'Katherine Test',
					url: '',
					cost: 500,
					freq: 'Monthly',
					startDate: '2019-01-01',
					startTime: 11,
					ampm: 'AM',
					uid: 'testuserid'
				}];
	}

}
