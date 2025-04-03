import { Component } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { User } from '../../../user.modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario!: FormGroup;

  ngOnInit(){
    this.formulario = new FormGroup({
      inputEmail: new FormControl(null, [
        Validators.required
      ]),
      inputPassword: new FormControl(null,[
        Validators.required
      ])
    })
  }

  email: string = ''
  password: string = ''

  constructor(private authService: AuthService) { }

  fazerLogin(){
    const userEmail = this.formulario.get('inputEmail')?.value
    const userPassword = this.formulario.get('inputPassword')?.value

    this.authService.signIn(userEmail, userPassword);
  }

  onSubmit(formulario: any){
  }

  verificaInvalidTouched(campo: any): Boolean{
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched || false
  }

  aplicaCssErro(campo: any){
    return {
      'border-red-500 focus:border-red-600 ': this.verificaInvalidTouched(campo),
      'text-red-500': this.verificaInvalidTouched(campo)
    }
  }

}
