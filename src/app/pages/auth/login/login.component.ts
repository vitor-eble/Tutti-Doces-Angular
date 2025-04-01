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

  email: string = ''
  password: string = ''

  constructor(private authService: AuthService) { }

  fazerLogin(){
    this.authService.signIn(this.email, this.password);
  }

  onSubmit(formulario: any){
  }

}
