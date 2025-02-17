import { Component, OnInit } from '@angular/core';

import { BebidasService } from './bebidas.service';
import { Card } from '../card.modal';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-bebidas',
  standalone: false,

  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent implements OnInit {

  bebidas: Card[] = [];
  valueProductBebidas: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  constructor(
    private bebidasService: BebidasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    this.bebidas = this.bebidasService.getBebidas()
  }

  decrementaBebida(index: number){
    if(this.valueProductBebidas[index] > 1){
      this.valueProductBebidas[index]--
    }
  }

  incrementaBebida(index: number) {
    this.valueProductBebidas[index]++
  }

  addCart(index: number, tipo: string){
    let produtoSelecionado: Card | undefined;
    let quantidade = 1;

    if(tipo === 'bebida'){
      produtoSelecionado = this.bebidas[index];
      quantidade = this.valueProductBebidas[index];
    }

    if(produtoSelecionado) {
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
    }
  }
}
