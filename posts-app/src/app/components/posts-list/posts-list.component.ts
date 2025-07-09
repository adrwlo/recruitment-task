import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../types/post';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
	selector: 'app-posts-list',
	standalone: true,
	imports: [
		CommonModule,
		MatListModule
	],
	templateUrl: './posts-list.component.html',
	styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
	@Input() posts: Post[] = [];
	@Output() authorClick = new EventEmitter<number>();

	protected selectedPostId: number | null = null;

	protected onAuthorClick(post: Post): void {
		this.selectedPostId = post.id;
		this.authorClick.emit(post.userId);
	}
}