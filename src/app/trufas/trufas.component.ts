import { Component, OnInit } from '@angular/core';

import { TrufaService } from './trufa.service';
import { Card } from '../card.modal';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-trufas',
  standalone: false,

  templateUrl: './trufas.component.html',
  styleUrl: './trufas.component.css'
})
export class TrufasComponent implements OnInit {

  trufas: Card[] = [];
  valueProductTrufa: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  constructor(
    private TrufaService: TrufaService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    this.trufas = this.TrufaService.getTrufas();
  }

  decrementaTrufa(index: number) {
    if(this.valueProductTrufa[index] > 1){
      this.valueProductTrufa[index]--;
    }
  }

  incrementaTrufa(index: number){
    this.valueProductTrufa[index]++
  }

  addCart(index: number, tipo: string){
    let produtoSelecionado: Card | undefined;
    let quantidade = 1;

    if(tipo === 'trufa'){
      produtoSelecionado = this.trufas[index];
      quantidade = this.valueProductTrufa[index];
    }

    if(produtoSelecionado) {
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
    }
  }
}
