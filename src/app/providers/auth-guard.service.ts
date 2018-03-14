import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuard implements CanActivate{
	canActivate(){
		if(firebase.auth().currentUser){
			return true;
		} else {
			return false;
		}
	}
}