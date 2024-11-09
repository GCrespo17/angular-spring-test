import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavigationBarService {
  private generos = signal(['Todo', 'Historia', 'Fantasia', 'Geografia' ,'Biologia']);
  constructor() { }

  todosGeneros = this.generos.asReadonly();

  generoSeleccionado=signal('');

  setGeneroSeleccionado(dato: string){
    this.generoSeleccionado.set(dato);
  }

  

}
