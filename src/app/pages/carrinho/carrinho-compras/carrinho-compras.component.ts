import { Component, OnInit } from '@angular/core';

import { Card } from '../../../card.modal';
import { CarrinhoService } from '../../../services/carrinho.service';

@Component({
  selector: 'app-carrinho-compras',
  standalone: false,

  templateUrl: './carrinho-compras.component.html',
  styleUrl: './carrinho-compras.component.css'
})
export class CarrinhoComprasComponent implements OnInit {

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
