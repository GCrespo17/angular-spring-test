import { Component, inject, input } from '@angular/core';
import { BooksContainerComponent } from "./books-container/books-container.component";
import { BookComponent } from "./book/book.component";
import { BookService } from './book.service';
// import { NavigationBarService } from '../navigation-bar/navigation-bar.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BooksContainerComponent, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  private booksService = inject(BookService);
  // private genreService = inject(NavigationBarService);
  // actualGenre=this.genreService.generoSeleccionado;
  genero=input.required();
  actualGenre=this.genero;
  bookList = this.booksService.books;

  
  
}
