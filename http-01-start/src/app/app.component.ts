import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Post } from 'post.model';
import { PostsService } from './posts.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	loadedPosts: Post[] = [];
	isFetching = false;
	error = null;
	private errorSub: Subscription;

	constructor(private http: HttpClient, private postsService: PostsService) {}

	ngOnInit() {
		this.postsService.error.subscribe(errorMessage => {
			this.error = errorMessage;
		});
		this.fetchUtil();
	}

	onCreatePost(postData: { title: string; content: string }) {
		// Send Http request
		this.postsService.createAndStorePosts(postData.title, postData.content);
		this.fetchUtil();
	}

	onFetchPosts() {
		// Send Http request
		this.fetchUtil();
	}

	onClearPosts() {
		// Send Http request
		this.postsService.clearPosts().subscribe(() => {
			this.loadedPosts = [];
		});
	}

	onHandleError() {
		this.error = null;
	}

	private fetchUtil() {
		this.isFetching = true;
		this.postsService.fetchPosts().subscribe(
			posts => {
				this.isFetching = false;
				this.loadedPosts = posts;
				this.error = null;
			},
			error => {
				this.error = error.message;
				this.isFetching = false;
			}
		);
	}

	ngOnDestroy() {
		this.errorSub.unsubscribe();
	}
}
