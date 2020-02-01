import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	projectForm: FormGroup;

	ngOnInit() {
		this.projectForm = new FormGroup({
			projectName: new FormControl(
				null,
				[Validators.required],
				[this.projectNameForbidden]
			),
			email: new FormControl(null, [
				Validators.required,
				Validators.email
			]),
			projectStatus: new FormControl(null, Validators.required)
		});
		this.projectForm.patchValue({
			projectStatus: 'stable'
		});
	}

	onSubmit() {
		console.log(
			`%cProject Name: ${
				this.projectForm.get('projectName').value
			}\nEmail: ${this.projectForm.get('email').value}\nProject Status: ${
				this.projectForm.get('projectStatus').value
			}`,
			'color: green'
		);
		this.projectForm.reset({
			projectStatus: 'stable'
		});
	}

	projectNameForbidden(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				if (control.value === 'Test' || control.value === 'test') {
					resolve({ projectNameForbidden: true });
				} else {
					resolve(null);
				}
			}, 1500);
		});
		return promise;
	}
}
