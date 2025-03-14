import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-inicio',
  standalone: false,

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  @Output() emitir: EventEmitter<string> = new EventEmitter()

  seila(){
   this.emitir.emit('vandrei tchola')
  }

}
