import { Component } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { User } from '../../../user.modal';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(){
    // this.formulario = new FormGroup({
    //   inputEmail: new FormControl(null, [
    //     Validators.required
    //   ]),
    //   inputPassword: new FormControl(null,[
    //     Validators.required
    //   ])
    // })

    this.formulario = this.fb.group({
      inputEmail: [null, [Validators.required]],
      inputPassword: [null, [Validators.required]]
    })
  }


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
