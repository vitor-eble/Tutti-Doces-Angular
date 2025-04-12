import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('sidebar') sidedar!: ElementRef
  @ViewChild('toggleButton') toggleButton!: ElementRef;

  menuAberto: boolean = false;
  showSidebar: boolean = true
  showLinks: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(){
    this.authService.getUsuarioEstaAutenticado()
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.showLinks = mostrar
    )
  }

  openSidebar(){
    event?.preventDefault()
    this.showSidebar = !this.showSidebar
  }

  closeLogOut() {
    this.showSidebar = false
  }

  logOut(){
    this.showSidebar = false
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

  @HostListener('document: click', ['$event'])
  onDocumentCLick(event: MouseEvent){
    const clickTarged = event.target as HTMLElement;
    const clickedInsideSidebar = this.sidedar?.nativeElement.contains(clickTarged)
    const clickedToggleButton = this.toggleButton?.nativeElement.contains(clickTarged);

    if(!clickedInsideSidebar && !clickedToggleButton){
      this.showSidebar = false
    }
  }
}
