import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BebidasModule } from './bebidas/bebidas.module';
import { BrigadeirosModule } from './brigadeiros/brigadeiros.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { InicioModule } from './inicio/inicio.module';
import { TrufasModule } from './trufas/trufas.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BebidasModule,
    BrigadeirosModule,
    CarrinhoModule,
    InicioModule,
    TrufasModule,
  ]
})
export class PagesModule { }
