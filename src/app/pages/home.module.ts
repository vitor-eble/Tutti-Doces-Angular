import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BebidasModule } from './bebidas/bebidas.module';
import { BrigadeirosModule } from './brigadeiros/brigadeiros.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { InicioModule } from './inicio/inicio.module';
import { TrufasModule } from './trufas/trufas.module';
import { CardModule } from '../components/card/card.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BebidasModule,
    BrigadeirosModule,
    CarrinhoModule,
    InicioModule,
    TrufasModule,
    CardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
