import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menuAberto: boolean = false;
  showLogOut: boolean = false;

  showLinks: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(){
    this.authService.getUsuarioEstaAutenticado()
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.showLinks = mostrar
    )
  }

  openLogOut(){
    this.showLogOut = !this.showLogOut
  }

  logOut(){
    this.showLogOut = false
    this.authService.logOut()
  }

  menuOpen() {
    this.menuAberto = !this.menuAberto;
    console.log("Menu aberto:", this.menuAberto);
  }

  closeMenu() {
    this.menuAberto = false;
    console.log("Menu fechado:", this.menuAberto);
  }
}
