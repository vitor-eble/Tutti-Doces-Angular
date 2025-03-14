import { LoginComponent } from './pages/auth/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/home/inicio/inicio.component';
import { BrigadeirosComponent } from './pages/home/brigadeiros/brigadeiros.component';
import { TrufasComponent } from './pages/home/trufas/trufas.component';
import { BebidasComponent } from './pages/home/bebidas/bebidas.component';
import { CarrinhoComponent } from './pages/home/carrinho/carrinho.component';
import { RegisterComponent } from './pages/auth/register/register.component';


const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'brigadeiros', component: BrigadeirosComponent },
    { path: 'trufas', component: TrufasComponent },
    { path: 'bebidas', component: BebidasComponent },
    { path: 'carrinho', component: CarrinhoComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
