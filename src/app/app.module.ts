import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { InicioComponent } from './pages/home/inicio/inicio.component';
import { BrigadeirosComponent } from './pages/home/brigadeiros/brigadeiros.component';
import { TrufasComponent } from './pages/home/trufas/trufas.component';
import { BebidasComponent } from './pages/home/bebidas/bebidas.component';
import { CarrinhoComponent } from './pages/home/carrinho/carrinho.component';
import { CarrinhoComprasComponent } from './pages/home/carrinho/carrinho-compras/carrinho-compras.component';
import { CarrinhoResumoComponent } from './pages/home/carrinho/carrinho-resumo/carrinho-resumo.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioProductsComponent } from './pages/home/inicio/inicio-products/inicio-products.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './pages/auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioProductsComponent,
    BrigadeirosComponent,
    TrufasComponent,
    BebidasComponent,
    CarrinhoComponent,
    CarrinhoComprasComponent,
    CarrinhoResumoComponent,
    HomeComponent,
    CardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
