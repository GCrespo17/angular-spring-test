import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationBarService } from '../../navigation-bar/navigation-bar.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // location=inject(Location);
  inputPassword='';
  inputUser='';
  navegacionServicio=inject(NavigationBarService);
  ruta=inject(Router);
  genero='/'+this.navegacionServicio.generoSeleccionado();

  onCancel(){
    // this.location.back();
    this.ruta.navigate([this.genero]);
  }

  onSubmit(){
    console.log(this.inputUser);
    this.ruta.navigate([this.genero]);
  }
}
