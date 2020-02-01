import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	onFormSubmit(form: HTMLFormElement) {
		const { email, password, selectSub } = form.value;
		console.table({
			Email: email,
			Passsword: password,
			Subscription: selectSub
		});
		form.reset();
	}
}
