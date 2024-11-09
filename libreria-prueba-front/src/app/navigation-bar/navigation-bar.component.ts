import { Component, computed, inject } from '@angular/core';
import { NavigationBarService } from './navigation-bar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  private generoServicio = inject(NavigationBarService);

  generos = computed(()=> this.generoServicio.todosGeneros());

  seleccionarGenero(genero: string){
    this.generoServicio.setGeneroSeleccionado(genero);
    console.log(genero);
  }
  
}
