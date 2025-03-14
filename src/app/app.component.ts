import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutti-doces-angular';

  recebiEvento(evento: string){
    console.log(evento);

  }


  // (click)="menuAberto = false"
}
