import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
	constructor(public afAuth: AngularFireAuth, private router: Router ) { }

	loginWithGoogle(){
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.afAuth.auth.signInWithPopup( provider )
		.then(val => {
			console.log('Success', val);
			this.router.navigate(['home', val.user.uid]);
		})
		.catch(err =>{
			console.log('Error :( ', err);
		});
	}

	getUser(){
		return this.afAuth.authState;
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
