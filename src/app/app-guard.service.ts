import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class RouteGuard implements CanActivate{
	constructor(private router: Router){}

	canActivate(){
		if(firebase.auth().currentUser){
			return true;
		} else {
			this.router.navigateByUrl('/login');
			return false;
		}
	}
}