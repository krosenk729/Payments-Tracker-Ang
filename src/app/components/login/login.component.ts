import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(public auth: AuthService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
	}

	loginWithGoogle(){
		this.auth.loginWithGoogle();
	}
}