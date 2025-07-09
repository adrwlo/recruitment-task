import { Component } from '@angular/core';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AuthorDetailsComponent } from "./components/author-details/author-details.component";
import { AppService } from './app.service';
import { Post } from './types/post';
import { Author } from './types/author';

@Component({
	selector: 'app-root',
	imports: [PostsListComponent, AuthorDetailsComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	protected posts: Post[] = [];
	protected authorsCache = new Map<number, Author>();
	protected selectedAuthor: Author | undefined = undefined;

	constructor(private appService: AppService) {}

	ngOnInit(): void {
		this.appService.getPosts().subscribe((posts) => this.posts = posts);
	}

	protected authorClick(userId: number): void {
		const cached = this.authorsCache.get(userId);

		if (cached) {
			this.selectedAuthor = cached;
		} else {
			this.appService.getAuthors(userId).subscribe(author => {
				this.authorsCache.set(userId, author);
				this.selectedAuthor = author;
			});
		}
  	}
}
