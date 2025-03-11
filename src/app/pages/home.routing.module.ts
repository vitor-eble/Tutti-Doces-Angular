import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BrigadeirosComponent } from './brigadeiros/brigadeiros.component';
import { InicioComponent } from './inicio/inicio.component';
import { TrufasComponent } from './trufas/trufas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from "./home.component";

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent },
    { path: 'brigadeiros', component: BrigadeirosComponent },
    { path: 'trufas', component: TrufasComponent},
    { path: 'bebidas', component: BebidasComponent },
    { path: 'carrinho', component: CarrinhoComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
