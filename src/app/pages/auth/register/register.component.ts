import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { User } from '../../../user.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  usuario: User = new User()
  confirmPassword: string = ''

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  fazerRegistro(){
    const sucess = this.authService.register(this.usuario, this.confirmPassword)
    if(sucess){
      this.router.navigate(['/login'])
    }
  }
}
