import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrigadeirosComponent } from './brigadeiros/brigadeiros.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'brigadeiros', component: BrigadeirosComponent },
  {path: 'inicio', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
