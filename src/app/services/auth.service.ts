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

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

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
      this.usuarioAutenticado.next(true);
      this.router.navigate(['/carrinho']);
    } catch (error: any) {
      alert('Erro ao logar: ' + error.message);
    }
  }

  async logOut() {
    await this.afAuth.signOut();
    this.usuarioAutenticado.next(false);
    this.router.navigate(['/inicio']);
  }

  /** Retorna um Observable<boolean> que indica se o usuário está autenticado */
  getUsuarioEstaAutenticado(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => !!user)); // Se user for null, retorna false.
  }


}
