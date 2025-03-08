import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { CarrinhoResumoComponent } from './carrinho-resumo/carrinho-resumo.component';
import { CarrinhoComponent } from './carrinho.component';



@NgModule({
  declarations: [
    CarrinhoComponent,
    CarrinhoComprasComponent,
    CarrinhoResumoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarrinhoModule { }
