import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../user.modal';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new BehaviorSubject<boolean>(false)

  constructor(private route: Router) { }

  signIn(usuario: User){
    if(usuario.nome === 'exemplo@email.com' && usuario.senha === '1234'){
      this.usuarioAutenticado = true;
      console.log(this.usuarioAutenticado);
      localStorage.setItem('usuarioAutenticado', 'true')
      this.mostrarMenuEmitter.next(true)
      this.route.navigate(['/carrinho'])

    } else {
      this.usuarioAutenticado = false;
      localStorage.removeItem('usuarioAutenticado')
      this.mostrarMenuEmitter.next(false)
    }
  }

  logOut(){
    this.usuarioAutenticado = false
    localStorage.removeItem('usuarioAutenticado')
    this.mostrarMenuEmitter.next(false)
    this.route.navigate(['/inicio'])
  }

  vefiricarAutenticacao(){
    const autenticado = localStorage.getItem('usuarioAutenticado') === 'true';
    this.usuarioAutenticado = autenticado
    this.mostrarMenuEmitter.next(autenticado)
  }
}
