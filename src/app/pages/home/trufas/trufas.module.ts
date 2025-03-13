import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrufasComponent } from './trufas.component';
import { CardModule } from "../../components/card/card.module";



@NgModule({
  declarations: [
    TrufasComponent
  ],
  imports: [
    CommonModule,
    CardModule
]
})
export class TrufasModule { }
