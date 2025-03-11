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
  amountBrigadeiros: number[] = []

  constructor(
    private brigadeiroService: BrigadeirosService,
    private carrinhoService: CarrinhoService
  ){ }

  ngOnInit() {
    this.brigadeiros = this.brigadeiroService.getBrigadeiros();
    this.brigadeiroService.amountBrigadeiros = new Array(this.brigadeiros.length).fill(1)
    this.amountBrigadeiros = this.brigadeiroService.amountBrigadeiros
  }


  decrementaBrigadeiro(index: number) {
    this.brigadeiroService.decrementaBrigadeiros(index)
  }

  incrementaBrigaidero(index: number){
    this.brigadeiroService.incrementaBrigadeiros(index)
  }

  addCart({ index, tipo }: { index: number; tipo: string }) {
    let produtoSelecionado: Card | undefined;
    let quantidade = 1;

    if (tipo === 'brigadeiro') {
        produtoSelecionado = this.brigadeiros[index];
        quantidade = this.amountBrigadeiros[index];
    }

    if (produtoSelecionado) {
        this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade);
    } else {
        console.error('Produto não encontrado para o tipo', tipo);
    }
  }

}
