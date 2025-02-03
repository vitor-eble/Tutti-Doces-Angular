import { Component, OnInit } from '@angular/core';
import { TrufaInicioService } from './trufa-inicio.service';
import { BrigadeiroInicioService } from './brigadeiro-inicio.service';
import { Card } from '../card.modal';

@Component({
  selector: 'app-inicio',
  standalone: false,

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  trufasInicio: Card[] = [];
  brigadeiroInicio: Card[] = []

  constructor(
    private trufaInicioService: TrufaInicioService,
    private brigadeiroInicioService: BrigadeiroInicioService
  ){  }

  ngOnInit() {
    this.trufasInicio = this.trufaInicioService.getTrufasInicio();
    this.brigadeiroInicio = this.brigadeiroInicioService.getBrigadeiroInicio()
  }

  verMais: string = 'https://cdn-icons-png.flaticon.com/128/11431/11431124.png'

}
