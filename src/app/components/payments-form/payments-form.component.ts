import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../providers/firebase.service';

@Component({
	selector: 'app-payments-form',
	templateUrl: './payments-form.component.html',
	styleUrls: ['./payments-form.component.css']
})
export class PaymentsFormComponent implements OnInit {
	@Input() uid;
	pForm: FormGroup;

	constructor(private fb: FormBuilder, private firebase: FirebaseService) {
		this.createForm();
	}

	createForm(){
		this.pForm = this.fb.group({
			name: ['', Validators.required],
			url: '',
			cost: ['', [Validators.required, Validators.min(1)]],
			freq: ['Monthly', Validators.required],
			startDate: [new Date(), Validators.required],
			startTime: ['11', [Validators.min(1), Validators.max(12)]],
			ampm: 'AM'
		});
	}

	onFormSubmit(){
		// console.log('submit clicked for form ', this.pForm.value);
		if(this.pForm.invalid){ return ; }
		this.firebase.sendPayment(this.pForm.value, this.uid);
		this.pForm.reset();
	}

	ngOnInit() {
	}

}
// https://www.concretepage.com/angular-2/angular-2-4-pattern-validation-example