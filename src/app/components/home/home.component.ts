import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	uid: any;
	user: any;
	constructor(
		public auth: AuthService, 
		private route: ActivatedRoute, 
		private router: Router
		) { }

	ngOnInit() {
		this.route.params.subscribe(params =>{
			this.uid = params['id'];
		});
		this.user = this.auth.getUser();
	}

	logout(){
		this.auth.logout();
	}

}
