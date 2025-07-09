import { Injectable } from '@angular/core';
import { Author } from './types/author';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './types/post';

@Injectable({
  	providedIn: 'root'
})
export class AppService {

	constructor(private http: HttpClient) {}

	getPosts(): Observable<Post[]> {
		return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
	}

	getAuthors(userId: number): Observable<Author> {
		return this.http.get<Author>(`https://jsonplaceholder.typicode.com/users/${userId}`);
	}
}
