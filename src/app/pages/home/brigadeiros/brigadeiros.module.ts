import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrigadeirosComponent } from './brigadeiros.component';
import { CardModule } from '../../components/card/card.module';



@NgModule({
  declarations: [
    BrigadeirosComponent,
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class BrigadeirosModule { }
