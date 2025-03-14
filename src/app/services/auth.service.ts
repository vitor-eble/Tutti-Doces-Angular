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

  register(usuario: User, confirmPassword: string){
    if(!usuario.nome || !usuario.email || !usuario.senha || !confirmPassword){
      alert('Preencha todos os campos!');
      return false
    }

    if(usuario.senha !== confirmPassword){
      alert('As senhas nao coincidem!')
      return false
    }
    if(localStorage.getItem(usuario.email)){
      alert('Este email ja esta cadastrado')
      return false
    }

    localStorage.setItem(usuario.email, JSON.stringify(usuario));
    alert('Cadastro realizado com sucesso!')
    return true
  }

  signIn(usuario: User){
    const userSave = localStorage.getItem(usuario.email)
    if(userSave){
      const dados: User = JSON.parse(userSave)
      if(dados.senha === usuario.senha){
        this.usuarioAutenticado = true;
        localStorage.setItem('usuarioAutenticado', 'true')
        this.mostrarMenuEmitter.next(true)
        this.route.navigate(['/carrinho'])
      } else {
        alert('Senha incorreta!')
      }
    } else {
      alert('Usuario nao encontrado! registre-se primeiro.')
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
