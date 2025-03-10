import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio.component';
import { CardModule } from "../../components/card/card.module";



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    CardModule
]
})
export class InicioModule { }
