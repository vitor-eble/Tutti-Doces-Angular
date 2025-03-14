import { Component } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { User } from '../../../user.modal';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: User = new User()

  constructor(private authService: AuthService) { }

  fazerLogin(){
    this.authService.signIn(this.usuario);
  }

}
