import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: InicioComponent}
  ] }
  // { path: 'brigadeiros', component: BrigadeirosComponent },
  // { path: 'inicio', component: InicioComponent },
  // { path: 'trufas', component: TrufasComponent},
  // { path: 'bebidas', component: BebidasComponent },
  // { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
