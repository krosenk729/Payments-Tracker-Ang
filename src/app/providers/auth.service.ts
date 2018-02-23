import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {
	user: Observable<User>;
	constructor(public afAuth: AngularFireAuth, private router: Router ) { }

	loginWithGoogle(){
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.afAuth.auth.signInWithPopup( provider )
		.then(val => {
			console.log('Success', val);
			// this.router.navigate(['/home', {id: 'testuserid'}]);
		})
		.catch(err =>{
			var id = 'testuserid';
			this.router.navigate(['home', id]);

			// this.router.navigate(['/home', {id: uid}]);
			// this.router.navigateByUrl('/home/' + 'testuserid');
			console.log('Error but will try to navigate...', err);
		});
	}
	logout(){
		return this.afAuth.auth.signOut()
		.then(() =>{
			this.router.navigate(['/']);
		});
	}

// https://github.com/angular-university/angular-firebase-app/blob/master/src/app/shared/security/auth.service.ts
}
// <button (click)="logout()">Logout</button>
// <button (click)="login()">Login with Google</button>