import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from "rxjs/Rx";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class MyFireService {

	constructor(private authService: AuthService, private fireDB: AngularFireDatabase) { }

	getUser(uid){
		const ref = firebase.database().ref('users/' + uid);
		return ref.once('value').then(snap => snap.val());
	}

	getUserPaymentRef(uid){
		return firebase.database().ref('payments').child(uid);
	}

	subscribePayments(uid){
		return this.fireDB.list('payments/' + uid).snapshotChanges();
	}

	handleNewPayment(paymentData){
		const user = this.authService.getUser();
		const newPaymentKey = firebase.database().ref('payments').child(user.uid).push().key;
		const updates = {};
		updates['/payments/' + user.uid + '/' + newPaymentKey] = paymentData;
		return firebase.database().ref().update(updates);
	}

	handlePaymentChange(pid, key, val){
		const user = this.authService.getUser();
		const updateRef = '/payments/' + user.uid + '/' + pid;
		return firebase.database().ref(updateRef).update({key: val});
	}

	handlePaymentDelete(pid){
		const user = this.authService.getUser();
		const delRef = '/payments/' + user.uid + '/' + pid;
		return firebase.database().ref(delRef).remove();
	}
}
