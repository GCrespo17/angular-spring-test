import { Component, inject } from '@angular/core';
import { NavigationBarService } from '../../navigation-bar/navigation-bar.service';

@Component({
  selector: 'app-books-container',
  standalone: true,
  imports: [],
  templateUrl: './books-container.component.html',
  styleUrl: './books-container.component.css'
})
export class BooksContainerComponent {
  private generoServicio=inject(NavigationBarService);
  generoSeleccionado=this.generoServicio.generoSeleccionado;
}
