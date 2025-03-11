import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio.component';
import { CardModule } from "../../components/card/card.module";
import { InicioProductsComponent } from './inicio-products/inicio-products.component';



@NgModule({
  declarations: [
    InicioComponent,
    InicioProductsComponent
  ],
  imports: [
    CommonModule,
    CardModule
]
})
export class InicioModule { }
