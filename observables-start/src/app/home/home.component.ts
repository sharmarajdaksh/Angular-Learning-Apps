import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	private firstObsSubscription: Subscription;

	constructor() {}

	ngOnInit() {
		// this.firstObsSubscription = interval(1000).subscribe(count => {
		// 	console.log(count);
		// });

		const customIntervalObservable = new Observable(observer => {
			let count = 0;
			setInterval(() => {
				if (count === 2) {
					observer.complete();
				}
				if (count > 3) {
					observer.error(new Error('Count > 3'));
				}
				observer.next(count++);
			}, 1000);
		});

		this.firstObsSubscription = customIntervalObservable
			.pipe(
				filter(data => (data === 0 ? false : true)),
				map(data => {
					return 'ROUND: ' + (+data + 1).toString();
				})
			)
			.subscribe(
				data => {
					console.log(data);
				},
				error => {
					console.log('Some error occured! ', error);
				},
				() => {
					console.log('Completed!');
				}
			);
	}

	ngOnDestroy() {
		this.firstObsSubscription.unsubscribe();
	}
}
