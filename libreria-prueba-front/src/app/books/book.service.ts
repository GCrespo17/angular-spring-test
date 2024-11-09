import { Injectable } from '@angular/core';
import { DUMMY_BOOKS } from '../DUMMY_BOOKS';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  get books(){
    return DUMMY_BOOKS;
  }
  
}
