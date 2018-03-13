import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
	user: any; 
	paymentRef: AngularFireList<any>;
	curPayments: Observable<any>;
	constructor(public afAuth: AngularFireAuth, private router: Router, private db: AngularFireDatabase ) {
		this.paymentRef = this.db.list('payments');
		this.afAuth.auth.onAuthStateChanged(user => {
			if(user){
				this.user = user;
				this.curPayments = this.subscribePayments();
				console.log( 'curr user', this.afAuth.auth.currentUser );	
			} else {
				this.user = {};
			}
		});
	}

	loginWithGoogle(){
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.afAuth.auth.signInWithPopup( provider )
		.then(user => {
			this.user = user.user;
			this.router.navigate(['home', user.user.uid]);
		})
		.catch(err =>{
			console.log('Error :( ', err);
		});
	}

	getUser(){
		return this.afAuth.authState;
	}

	subscribePayments(){
		if(!this.user || !this.user.uid){
			return ;
		}
		return this.db.list('payments', r => r.orderByChild('uid').equalTo(this.user.uid)).snapshotChanges();
	}

	sendPayment(p, pid = ''){
		if(!pid){
			this.paymentRef.push({...p, uid: this.user.uid});
		} else {
			console.log('user', this.user);
			this.paymentRef.update(pid, {...p, uid: this.user.uid});
		}
	}

	delPayment(pid){
		this.paymentRef.remove(pid);
		console.log('deleted?');
	}

	logout(){
		return this.afAuth.auth.signOut()
		.then(() =>{
			this.router.navigate(['/']);
		});
	}
// https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
// https://github.com/angular-university/angular-firebase-app/blob/master/src/app/shared/security/auth.service.ts
}
