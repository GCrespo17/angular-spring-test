import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { PruebaComponent } from "./prueba/prueba.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavigationBarComponent, PruebaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libreria-prueba-front';
}
