import { AuthService } from './../../../services/auth.service';
import { Component, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private authService: AuthService, private router: Router, private fb: FormBuilder
  ) {

  }

  ngOnInit(){
    // this.formulario = new FormGroup({
    //   inputEmail: new FormControl(null, [
    //     Validators.required, Validators.email
    //   ]),
    //   passwordInput: new FormControl(null, [
    //     Validators.required
    //   ]),
    //   confirmPasswordInput: new FormControl(null, [
    //     Validators.required
    //   ])
    // });

    this.formulario = this.fb.group({
      inputName: [null, [Validators.required]],
      inputEmail: [null, [Validators.required, Validators.email]],
      passwordInput: [null, [Validators.required]],
      confirmPasswordInput: [null, [Validators.required]]
    })


  }

  async register(){

    const nome = this.formulario.get('inputName')?.value?.trim()
    const email = this.formulario.get('inputEmail')?.value?.trim();
    const password = this.formulario.get('passwordInput')?.value?.trim();
    const confirmPassword = this.formulario.get('confirmPasswordInput')?.value?.trim();

    if(!nome || !email || !password || !confirm){
      alert('Preencha todos os campos!');
      return
    }

    if(password !== confirmPassword){
      alert('As senhas nao coincidem!')
      return
    }

    await this.authService.register(email, password, nome )
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
