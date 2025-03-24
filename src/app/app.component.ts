import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutti-doces-angular';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUsuarioEstaAutenticado().subscribe(authenticated => {
      if (!authenticated) {
        this.router.navigate(['/inicio']); // Redireciona caso o usuário não esteja autenticado
      }
    });
  }


  // (click)="menuAberto = false"
}
