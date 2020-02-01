import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpHeaders,
	HttpParams,
	HttpEventType
} from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Post } from 'post.model';

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	error = new Subject<string>();

	constructor(private http: HttpClient) {}

	createAndStorePosts(title: string, content: string) {
		const postData: Post = { title, content };
		this.http
			.post<{ name: string }>(
				'https://ng-complete-guide-4c88f.firebaseio.com//posts.json',
				postData,
				{
					observe: 'response'
				}
			)
			.subscribe(
				responseData => {
					console.log(responseData);
					console.log(responseData.body);
				},
				error => {
					this.error.next(error.message);
				}
			);
	}

	fetchPosts() {
		let searchParams = new HttpParams();
		searchParams = searchParams.append('print', 'pretty');
		searchParams = searchParams.append('custon', 'key');
		return this.http
			.get<{ [key: string]: Post }>(
				'https://ng-complete-guide-4c88f.firebaseio.com//posts.json',
				{
					headers: new HttpHeaders({
						'Custom-Header': 'Hello'
					}),
					params: searchParams,
					responseType: 'json'
				}
			)
			.pipe(
				map(responseData => {
					const postsArray: Post[] = [];
					for (const key in responseData) {
						if (responseData.hasOwnProperty(key)) {
							postsArray.push({ ...responseData[key], id: key });
						}
					}
					return postsArray;
				}),
				catchError(errorRes => {
					// Send to analytics server
					return throwError(errorRes);
				})
			);
	}

	clearPosts() {
		return this.http
			.delete(
				'https://ng-complete-guide-4c88f.firebaseio.com//posts.json',
				{
					observe: 'events',
					responseType: 'text'
				}
			)
			.pipe(
				tap(event => {
					console.log(event);
					if (event.type === HttpEventType.Sent) {
						console.log('Request sent... Waiting for response');
					}
					if (event.type === HttpEventType.Response) {
						console.log(event.body);
					}
				})
			);
	}
}
