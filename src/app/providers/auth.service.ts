import { EventEmitter } from '@angular/core';
import * as firebase from 'firebase';

export class AuthService {
	statusChange: any = new EventEmitter<any>();

	constructor() { }

	set(user){
		localStorage.setItem('user', JSON.stringify(user));
		this.statusChange.emit(user);
	}

	getUser(){
		const user = localStorage.getItem('user');
		return JSON.parse(user);
	}

	destroy(){
		localStorage.removeItem('user');
		this.statusChange.emit(null);
	}
}