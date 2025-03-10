import { Component, OnInit } from '@angular/core';

import { BebidasService } from '../../services/bebidas.service';
import { Card } from '../../card.modal';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-bebidas',
  standalone: false,

  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent implements OnInit {

  bebidas: Card[] = [];
  valueProductBebidas: number[] = []

  constructor(
    private bebidasService: BebidasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    this.bebidas = this.bebidasService.getBebidas();
    this.valueProductBebidas = new Array(this.bebidas.length).fill(1)
  }

  decrementaBebida(index: number){
    if(this.valueProductBebidas[index] > 1){
      this.valueProductBebidas[index]--
    }
  }

  incrementaBebida(index: number) {
    this.valueProductBebidas[index]++
  }

  addCart(index: number){
    let produtoSelecionado = this.bebidas[index];
    let quantidade = this.valueProductBebidas[index];

    if(produtoSelecionado && quantidade > 0){
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
    }

  }
}
