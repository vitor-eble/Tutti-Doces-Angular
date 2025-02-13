import { Injectable } from '@angular/core';

import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private itemsCarrinho: { produto: Card, quantidade: number}[] = [];


  constructor(){
    this.carregarCarrinho()
   }

  private salvarCarrinho(){
    localStorage.setItem('carrinho', JSON.stringify(this.itemsCarrinho))
  }

  private carregarCarrinho(){
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo){
      this.itemsCarrinho = JSON.parse(carrinhoSalvo)
    }
  }

  adicionarProduto(produto: Card, quantidade: number){
    const itemExistente = this.itemsCarrinho.find(item => item.produto.title === produto.title);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.itemsCarrinho.push({ produto, quantidade });
    }
    this.salvarCarrinho();
    console.log('Carrinho atualizado:', this.itemsCarrinho);
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
    this.salvarCarrinho()
  }

  removerProduto(produto: Card){
    this.itemsCarrinho = this.itemsCarrinho.filter(item => item.produto.title !== produto.title);
    this.salvarCarrinho()
  }
}
