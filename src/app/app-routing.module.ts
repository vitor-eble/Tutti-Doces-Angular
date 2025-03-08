import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrigadeirosComponent } from './pages/brigadeiros/brigadeiros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrufasComponent } from './pages/trufas/trufas.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'brigadeiros', component: BrigadeirosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'trufas', component: TrufasComponent},
  { path: 'bebidas', component: BebidasComponent },
  { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
