import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	uid: any;
	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe(params =>{
			this.uid = params['id'];
		});
	}

}
