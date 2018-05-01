import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Injectable()
export class MyFireService {

	constructor(private authService: AuthService) { }

	getUser(uid){
		const ref = firebase.database().ref('users/' + uid);
		return ref.once('value').then(snap => snap.val());
	}

	getUserPaymentRef(uid){
		// return firebase.database().ref('payments').child(uid);
		return firebase.database().ref('payments').orderByChild('uid').equalTo(uid);
	}

	handleNewPayment(paymentData, uid){
		console.log('provider', uid);
		const newPaymentKey = firebase.database().ref('payments').push().key;
		const updates = {};
		updates['/payments/' + newPaymentKey] = {...paymentData, uid, updateDate: new Date()};
		return firebase.database().ref().update(updates);
	}

	handlePaymentChange(pid, key, val){
		const user = this.authService.getUser();
		const updateRef = '/payments/' + pid;
		return firebase.database().ref(updateRef).update({[key]: val, updateDate: new Date()});
	}

	handlePaymentDelete(pid){
		const user = this.authService.getUser();
		const delRef = '/payments/' + pid;
		console.log('ran delete', pid);
		return firebase.database().ref(delRef).remove();
	}
}
