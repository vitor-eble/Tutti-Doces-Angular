import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private itemsCarrinho: { produto: Card, quantidade: number}[] = [];
  private totalProduto = new BehaviorSubject<number>(0);

  totalProduto$ = this.totalProduto.asObservable();

  constructor(){
    this.carregarCarrinho()
  }

  private salvarCarrinho(){
    localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho))
    localStorage.setItem('total', JSON.stringify(this.totalProduto.getValue()))
  }

  private carregarCarrinho(){
    const carrinhoSalvo = localStorage.getItem('carrinho');
    const totalSalvo = localStorage.getItem('total')

    if (carrinhoSalvo){
      this.itemsCarrinho = JSON.parse(carrinhoSalvo)
    }

    if (totalSalvo){
      this.totalProduto.next(JSON.parse(totalSalvo));
    } else {
      this.atulizarTotal()
    }
  }

  adicionarProduto(produto: Card, quantidade: number){
    const itemExistente = this.itemsCarrinho.find(item => item.produto.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.itemsCarrinho.push({ produto, quantidade });
    }

    this.salvarCarrinho();
    this.atulizarTotal();
  }

  listarProdutos(){
    return this.itemsCarrinho;
  }

  decrementaProduto(produto: Card){
    const item = this.itemsCarrinho.find(item => item.produto.title === produto.title);
    if(item){
      item.quantidade -= 1;
      if(item.quantidade <= 0 ){
        this.removerProduto(produto)
      }
    }
    this.salvarCarrinho();
    this.atulizarTotal()
  }

  removerProduto(produto: Card){
    this.itemsCarrinho = this.itemsCarrinho.filter(item => item.produto.title !== produto.title);
    this.salvarCarrinho();
    this.atulizarTotal()
  }

  atulizarTotal(){
    const total = this.itemsCarrinho.reduce((sum: number, item) => sum + Number(item.produto.value) * item.quantidade, 0);
    this.totalProduto.next(total);
    this.salvarCarrinho()
  }
}
