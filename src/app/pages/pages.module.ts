import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BebidasModule } from './bebidas/bebidas.module';
import { BrigadeirosModule } from './brigadeiros/brigadeiros.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { InicioModule } from './inicio/inicio.module';
import { TrufasModule } from './trufas/trufas.module';
import { CardComponent } from '../components/card/card.component';
import { CardModule } from '../components/card/card.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BebidasModule,
    BrigadeirosModule,
    CarrinhoModule,
    InicioModule,
    TrufasModule,
    CardModule
  ]
})
export class PagesModule { }
