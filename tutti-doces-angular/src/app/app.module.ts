import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrigadeirosComponent } from './brigadeiros/brigadeiros.component';
import { TrufasComponent } from './trufas/trufas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BrigadeirosComponent,
    TrufasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
