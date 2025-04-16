import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CardComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule

  ], exports: [
    CardComponent,
  ]
})
export class ComponentsModule { }
