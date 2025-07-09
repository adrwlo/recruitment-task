import { Component, Input } from '@angular/core';
import { Author } from '../../types/author';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-author-details',
	imports: [MatCardModule],
	templateUrl: './author-details.component.html',
	styleUrl: './author-details.component.scss'
})
export class AuthorDetailsComponent {
	@Input() author: Author | undefined;
}
