import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule

  ], exports: [
    CardComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
