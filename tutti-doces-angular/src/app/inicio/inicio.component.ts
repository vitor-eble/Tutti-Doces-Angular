import { Component, OnInit } from '@angular/core';

import { TrufaInicioService } from './trufa-inicio.service';
import { BrigadeiroInicioService } from './brigadeiro-inicio.service';
import { BebidasInicioService } from './bebidas-inicio.service';
import { Card } from '../card.modal';
import { CarrinhoService } from './../carrinho/carrinho.service';

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
    private bebidasInicioService: BebidasInicioService,
    private carrinhoService: CarrinhoService
  ){  }

  ngOnInit() {
    this.trufasInicio = this.trufaInicioService.getTrufasInicio();
    this.brigadeiroInicio = this.brigadeiroInicioService.getBrigadeiroInicio()
    this.bebidasInicio = this.bebidasInicioService.getBebidasInicio();

    console.log('Lista de Brigadeiros:', this.brigadeiroInicio);
    console.log('Lista de Trufas:', this.trufasInicio);
    console.log('Lista de Bebidas:', this.bebidasInicio);
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
    let produtoSelecionado: Card | undefined;
    let quantidade = 1;

    console.log('tipo de produto', tipo);

    if (tipo === 'brigadeiro') {
      produtoSelecionado = this.brigadeiroInicio[index];
      quantidade = this.valueProductBrigadeiro[index];
      console.log('Produto Selecionado (Brigadeiro):', produtoSelecionado);
    } else if (tipo === 'trufa') {
      produtoSelecionado = this.trufasInicio[index];
      quantidade = this.valueProductTrufa[index];
      console.log('Produto Selecionado (Trufa):', produtoSelecionado);
    } else if (tipo === 'bebida') {
      produtoSelecionado = this.bebidasInicio[index];
      quantidade = this.valueProductBebida[index];
      console.log('Produto Selecionado (Bebida):', produtoSelecionado);
    }

    if (produtoSelecionado) {
      console.log(`Adicionando ao carrinho: ${quantidade}x ${produtoSelecionado.title}`);
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
      // alert(` Você adicionou ${quantidade}x ${produtoSelecionado.title} ao carrinho!`);
    } else {
      console.error('produto não encontrado para o tipo', tipo);
    }
  }
}
