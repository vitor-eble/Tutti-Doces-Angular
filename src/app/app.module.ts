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
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthGuard } from './guard/auth.guard';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SidebarComponent } from './pages/home/sidebar/sidebar.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    LoginComponent,
    RegisterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBJKo14Pv1pL-eReWIPd1QCdp6pQGCu8iA",
      authDomain: "tutti-doces-angular.firebaseapp.com",
      projectId: "tutti-doces-angular",
      storageBucket: "tutti-doces-angular.firebasestorage.app",
      messagingSenderId: "941752678860",
      appId: "1:941752678860:web:a83cc34e26815ca66b4569"
    }),
    AngularFireAuthModule,
    ComponentsModule
 ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
