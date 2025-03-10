import { Component, OnInit } from '@angular/core';

import { Card } from '../../card.modal';
import { CarrinhoService } from '../../services/carrinho.service';
import { BrigadeirosService } from '../../services/brigadeiros.service';
import { TrufaService } from '../../services/trufa.service';
import { BebidasService } from '../../services/bebidas.service';

@Component({
  selector: 'app-inicio',
  standalone: false,

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {

  trufas: Card[] = [];
  brigadeiros: Card[] = [];
  bebidas: Card[] = [];

  valueProductBrigadeiro: number[] = [];
  valueProductTrufa: number[] = [];
  valueProductBebida: number[] = [];

  verMais: string = 'https://cdn-icons-png.flaticon.com/128/11431/11431124.png'

  constructor(
    private carrinhoService: CarrinhoService,
    private brigadeirosService: BrigadeirosService,
    private trufasService: TrufaService,
    private bebidasService: BebidasService,
  ){  }

  ngOnInit() {
    this.brigadeiros = this.brigadeirosService.getBrigadeiros().slice(0,4);
    this.trufas = this.trufasService.getTrufas().slice(0,4);
    this.bebidas = this.bebidasService.getBebidas().slice(0,4);

    this.valueProductBrigadeiro = new Array(this.brigadeiros.length).fill(1);
    this.valueProductTrufa = new Array(this.trufas.length).fill(1);
    this.valueProductBebida = new Array(this.bebidas.length).fill(1)
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
    let produtoSelecionado: Card | undefined
    let quantidade = 1

    switch(tipo){
      case 'brigadeiro':
        produtoSelecionado = this.brigadeiros[index];
        quantidade = this.valueProductBrigadeiro[index];
        break
      case 'trufa':
        produtoSelecionado = this.trufas[index];
        quantidade = this.valueProductTrufa[index];
        break;
      case 'bebida':
        produtoSelecionado = this.bebidas[index];
        quantidade = this.valueProductBebida[index];
        break;
      default:
        console.log('Tipo de produto nao encontrado');
        return
    }

    if(produtoSelecionado){
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade);
    }
  }
}
