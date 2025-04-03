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

  email: string = ''
  password: string = ''
  confirmPassword: string = ''

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  async register(){
    if(!this.email || !this.password || !this.confirmPassword){
      alert('Preencha todos os campos!');
      return
    }

    if(this.password !== this.confirmPassword){
      alert('As senhas nao coincidem!')
      return
    }

    await this.authService.register(this.email, this.password)
  }

  onSubmit(formulario: any) {

  }
}
