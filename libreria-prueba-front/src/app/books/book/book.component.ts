import { Component, input } from '@angular/core';
import { Book } from './book.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookRecieved=input.required<Book>();

}
