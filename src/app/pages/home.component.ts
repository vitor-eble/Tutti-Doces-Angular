import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menuAberto: boolean = false

  menuOpen() {
    this.menuAberto = !this.menuAberto;
    console.log("Menu aberto:", this.menuAberto);
  }

  closeMenu() {
    this.menuAberto = false;
    console.log("Menu fechado:", this.menuAberto);
  }
}
