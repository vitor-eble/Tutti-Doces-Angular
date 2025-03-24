import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = new BehaviorSubject<boolean>(false);
  mostrarMenuEmitter = this.usuarioAutenticado.asObservable();

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.usuarioAutenticado.next(!!user); // Atualiza a variável quando o estado do usuário muda
    });
  }

  async register(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('Usuário registrado:', userCredential);
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/login']);
    } catch (error: any) {
      console.error('Erro no registro:', error);
      alert('Erro ao cadastrar: ' + error.message);
    }
  }

  async signIn(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/carrinho']);
    } catch (error: any) {
      alert('Erro ao logar: ' + error.message);
    }
  }

  async logOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/inicio']);
  }

  getUsuarioEstaAutenticado(): Observable<boolean> {
    return this.usuarioAutenticado.asObservable(); // Agora você usa o BehaviorSubject diretamente
  }

}
