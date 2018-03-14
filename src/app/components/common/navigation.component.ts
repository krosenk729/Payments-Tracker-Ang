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
	name: string;
	email: string;
	avatar: string;

	constructor(
		private auth: AuthService,
		private router: Router
		) { }

	ngOnInit() {
		this.auth.statusChange.subscribe(user => {
			if(user){
				this.uid = user.uid;
				this.name = user.name;
				this.email = user.email;
				this.avatar = user.avatar;
			} else {
				this.uid = null;
				this.name = null;
				this.email = null;
				this.avatar = null;
			}
		});

		firebase.auth().onAuthStateChanged(user =>{
			if(user){
				this.isLoggedIn = true;
				const user = this.auth.getUser();
				if(user){
					this.uid = user.uid;
					this.name = user.name;
					this.email = user.email;
					this.avatar = user.avatar;
				}
				this.router.navigate(['/payments']);
			} else {
				this.isLoggedIn = false;
				this.router.navigate(['/login']);
			}
		})
	}

	onLogout(){
		firebase.auth().signOut()
			.then(()=> {
				this.isLoggedIn = false;
				this.auth.destroy();
			});
	}
}
