import { Component, inject} from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationBarService } from '../navigation-bar/navigation-bar.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  // location=inject(Location);
  // onClose(){
  //   this.location.back();
  // }

  route=inject(Router);
  navegacionServicio=inject(NavigationBarService);
  rutaInicial="/"+this.navegacionServicio.generoSeleccionado();

  onClose(){
    this.route.navigate([this.rutaInicial]);
  }

}
