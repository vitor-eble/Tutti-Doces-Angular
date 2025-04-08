import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    CardComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ToastComponent
  ],
})
export class ComponentsModule { }
