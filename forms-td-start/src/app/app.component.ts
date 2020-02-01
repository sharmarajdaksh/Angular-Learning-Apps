import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f', { static: false }) signupForm: NgForm;
	defaultQuestion = 'pet';
	answer = '';
	genders = ['male', 'female'];
	user = {
		username: '',
		email: '',
		secretQuestion: '',
		answer: '',
		gender: ''
	};
	submitted = false;

	suggestUserName() {
		const suggestedName = 'Superuser';

		// // Sets (owerwrites) values for ALL elements
		// this.signupForm.setValue({
		// 	userData: {
		// 		name: suggestedName,
		// 		email: ''
		// 	},
		// 	secretData: {
		// 		secret: 'pet',
		// 		questionAnswer: '',
		// 		gender: 'male'
		// 	}
		// });

		// Set only specific values
		this.signupForm.form.patchValue({
			userData: {
				name: suggestedName
			}
		});
	}

	// onSubmit(form: NgForm) {
	// 	console.log('Submitted');
	// 	console.log(form);
	// }

	onSubmit() {
		this.user.username = this.signupForm.value.userData.name;
		this.user.email = this.signupForm.value.userData.email;
		this.user.secretQuestion = this.signupForm.value.secretData.secret;
		this.user.answer = this.signupForm.value.secretData.questionAnswer;
		this.user.gender = this.signupForm.value.secretData.gender;
		this.submitted = true;

		this.signupForm.reset();
	}
}
