import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formulario!: FormGroup;

  email: string = ''
  password: string = ''
  confirmPassword: string = ''

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit(){
    this.formulario = new FormGroup({
      inputEmail: new FormControl(null, [
        Validators.required, Validators.email
      ]),
      passwordInput: new FormControl(null, [
        Validators.required
      ]),
      confirmPasswordInput: new FormControl(null, [
        Validators.required
      ])
    })
  }

  async register(){
    if(!this.formulario.get('emailInput')?.value || !this.password || !this.confirmPassword){
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
