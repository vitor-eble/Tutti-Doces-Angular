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
  valueProductBrigadeiro: number[] = [];

  constructor(
    private brigadeiroService: BrigadeirosService,
    private carrinhoService: CarrinhoService
  ){ }

  ngOnInit() {
    this.brigadeiros = this.brigadeiroService.getBrigadeiros();
    this.valueProductBrigadeiro = new Array(this.brigadeiros.length).fill(1)
  }

  decrementaBrigadeiro(index: number) {
    if(this.valueProductBrigadeiro[index] > 1){
      this.valueProductBrigadeiro[index]--;
    }
  }

  incrementaBrigaidero(index: number){
    this.valueProductBrigadeiro[index]++
  }

  addCart({ index, tipo }: { index: number; tipo: string }) {
    let produtoSelecionado: Card | undefined;
    let quantidade = 1;

    if (tipo === 'brigadeiro') {
        produtoSelecionado = this.brigadeiros[index];
        quantidade = this.valueProductBrigadeiro[index];
    }

    if (produtoSelecionado) {
        this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade);
    } else {
        console.error('Produto não encontrado para o tipo', tipo);
    }
}

}
