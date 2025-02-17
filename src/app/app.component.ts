import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutti-doces-angular';

  menuAberto: boolean = false

  menuOpen() {
    this.menuAberto = !this.menuAberto;
    console.log("Menu aberto:", this.menuAberto);
  }

  closeMenu() {
    this.menuAberto = false;
    console.log("Menu fechado:", this.menuAberto);
  }

  // (click)="menuAberto = false"
}
