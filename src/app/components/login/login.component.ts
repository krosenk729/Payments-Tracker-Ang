import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(public firebase: FirebaseService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
	}

	loginWithGoogle(){
		this.firebase.loginWithGoogle();
	}
}