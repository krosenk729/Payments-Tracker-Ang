import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle(){
  	const provider = new firebase.auth.GoogleAuthProvider();
  	firebase.auth().signInWithPopup( provider )
  	.then(data => {
  		const user = data.user;
  		// console.log('user ', user);
  		firebase.database().ref('users/' + user.uid).update({
  			uid: user.uid,
  			email: user.email,
  			displayName: user.displayName,
  			photoURL: user.photoURL
  		}).then(()=> this.router.navigate(['/payments']))
  	})
  	.catch(err =>{
  		console.log(err);
  	});
  }


}
