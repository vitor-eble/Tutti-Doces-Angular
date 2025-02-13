import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrigadeirosComponent } from './brigadeiros/brigadeiros.component';
import { TrufasComponent } from './trufas/trufas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoComprasComponent } from './carrinho/carrinho-compras/carrinho-compras.component';
import { CarrinhoResumoComponent } from './carrinho/carrinho-resumo/carrinho-resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BrigadeirosComponent,
    TrufasComponent,
    BebidasComponent,
    CarrinhoComponent,
    CarrinhoComprasComponent,
    CarrinhoResumoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
