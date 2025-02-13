import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from './carrinho.service';
import { Card } from '../card.modal';

@Component({
  selector: 'app-carrinho',
  standalone: false,

  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {

  produtos: { produto: Card, quantidade: number }[] = [];

  constructor(private CarrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.produtos = this.CarrinhoService.listarProdutos();
  }

  incrementaQuantidade(produto: Card) {
    this.CarrinhoService.adicionarProduto(produto, 1);
    this.produtos = this.CarrinhoService.listarProdutos();
  }

  decrementaQuantidade(produto: Card) {
    this.CarrinhoService.decrementaProduto(produto);
    this.produtos = this.CarrinhoService.listarProdutos();
  }

  removerProduto(produto: Card) {
    this.CarrinhoService.removerProduto(produto);
    this.produtos = this.CarrinhoService.listarProdutos();
  }
}
