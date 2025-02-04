import { Component, OnInit } from '@angular/core';
import { TrufaInicioService } from './trufa-inicio.service';
import { BrigadeiroInicioService } from './brigadeiro-inicio.service';
import { BebidasInicioService } from './bebidas-inicio.service';
import { Card } from '../card.modal';

@Component({
  selector: 'app-inicio',
  standalone: false,

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  valueProductBrigadeiro: number[] = [1, 1, 1, 1];
  valueProductTrufa: number[] = [1, 1, 1, 1];
  valueProductBebida: number[] = [1, 1, 1, 1];


  verMais: string = 'https://cdn-icons-png.flaticon.com/128/11431/11431124.png'

  trufasInicio: Card[] = [];
  brigadeiroInicio: Card[] = [];
  bebidasInicio: Card[] = [];

  constructor(
    private trufaInicioService: TrufaInicioService,
    private brigadeiroInicioService: BrigadeiroInicioService,
    private bebidasInicioService: BebidasInicioService
  ){  }

  ngOnInit() {
    this.trufasInicio = this.trufaInicioService.getTrufasInicio();
    this.brigadeiroInicio = this.brigadeiroInicioService.getBrigadeiroInicio()
    this.bebidasInicio = this.bebidasInicioService.getBebidasInicio()
  }

  decrementaBrigadeiro(index: number){
    if (this.valueProductBrigadeiro[index] > 1) {
      this.valueProductBrigadeiro[index]--;
    }
  }

  decrementaTrufa(index: number){
    if (this.valueProductTrufa[index] > 1) {
      this.valueProductTrufa[index]--;
    }
  }

  decrementaBebida(index: number){
    if(this.valueProductBebida[index] > 1){
      this.valueProductBebida[index]--;
    }
  }

  incrementaBrigadeiro(index: number){
    this.valueProductBrigadeiro[index]++;
  }

  incrementaTrufa(index: number){
    this.valueProductTrufa[index]++
  }

  incrementaBebida(index: number){
    this.valueProductBebida[index]++
  }

  addCart(index: number, tipo: string) {
    let produto: Card | undefined;
    let quantidade = 1;

    if (tipo === 'brigadeiro') {
      produto = this.brigadeiroInicio[index];
      quantidade = this.valueProductBrigadeiro[index];
    } else if (tipo === 'trufa') {
      produto = this.trufasInicio[index];
      quantidade = this.valueProductTrufa[index];
    } else if (tipo === 'bebida') {
      produto = this.bebidasInicio[index];
      quantidade = this.valueProductBebida[index];
    }

    if (produto) {
      alert(` Você adicionou ${quantidade}x ${produto.title} ao carrinho!`);
    }
  }
}
