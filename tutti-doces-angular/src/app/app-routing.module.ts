import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrigadeirosComponent } from './brigadeiros/brigadeiros.component';
import { InicioComponent } from './inicio/inicio.component';
import { TrufasComponent } from './trufas/trufas.component';
import { BebidasComponent } from './bebidas/bebidas.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'brigadeiros', component: BrigadeirosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'trufas', component: TrufasComponent},
  { path: 'bebidas', component: BebidasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
