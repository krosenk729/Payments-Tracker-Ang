import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
	
	constructor(public afAuth: AngularFireAuth ) { }

	loginWithGoogle(){
		return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
	}
	logout(){
		return this.afAuth.auth.signOut();
	}

// https://github.com/angular-university/angular-firebase-app/blob/master/src/app/shared/security/auth.service.ts
}
// <button (click)="logout()">Logout</button>
// <button (click)="login()">Login with Google</button>