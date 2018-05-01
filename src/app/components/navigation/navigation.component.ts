import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';
import * as firebase from 'firebase';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
	isLoggedIn: boolean = false;
	uid: string;
	displayName: string;
	email: string;
	photoURL: string;

	constructor(
		private auth: AuthService,
		private router: Router
		) { }

	ngOnInit() {
		this.auth.statusChange.subscribe(user => {
			if(user){
				this.uid = user.uid;
				this.displayName = user.displayName;
				this.email = user.email;
				this.photoURL = user.photoURL;
			} else {
				this.uid = null;
				this.displayName = null;
				this.email = null;
				this.photoURL = null;
			}
		});

		firebase.auth().onAuthStateChanged(user =>{
			if(user){
				this.isLoggedIn = true;
				this.uid = user.uid;
				this.displayName = user.displayName;
				this.email = user.email;
				this.photoURL = user.photoURL;
				this.router.navigate(['/payments']);
			} else {
				this.isLoggedIn = false;
				this.router.navigate(['/login']);
			}
		});
	}

	onLogout(){
		firebase.auth().signOut()
			.then(()=> {
				this.isLoggedIn = false;
				this.auth.destroy();
			});
	}
}
