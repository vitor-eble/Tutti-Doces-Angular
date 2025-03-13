import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasComponent } from './bebidas.component';
import { CardModule } from "../../../components/card/card.module";



@NgModule({
  declarations: [
    BebidasComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class BebidasModule { }
