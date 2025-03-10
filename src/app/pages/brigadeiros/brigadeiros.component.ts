import { Component, OnInit } from '@angular/core';

import { BrigadeirosService } from '../../services/brigadeiros.service';
import { Card } from '../../card.modal';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-brigadeiros',
  standalone: false,

  templateUrl: './brigadeiros.component.html',
  styleUrl: './brigadeiros.component.css'
})
export class BrigadeirosComponent implements OnInit {

  brigadeiros: Card[] = [];
  valueProductBrigaidero: number[] = [];

  constructor(
    private brigadeiroService: BrigadeirosService,
    private carrinhoService: CarrinhoService
  ){ }

  ngOnInit() {
    this.brigadeiros = this.brigadeiroService.getBrigadeiros();
    this.valueProductBrigaidero = new Array(this.brigadeiros.length).fill(1)
  }

  decrementaBrigadeiro(index: number) {
    if(this.valueProductBrigaidero[index] > 1){
      this.valueProductBrigaidero[index]--;
    }
  }

  incrementaBrigaidero(index: number){
    this.valueProductBrigaidero[index]++
  }

  addCart(index: number){
    let produtoSelecionado = this.brigadeiros[index];
    let quantidade = this.valueProductBrigaidero[index];

    if(produtoSelecionado && quantidade > 0){
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
    }
  }

}
