import { Component, OnInit } from '@angular/core';

import { BebidasService } from '../../../services/bebidas.service';
import { Card } from '../../../card.modal';
import { CarrinhoService } from '../../../services/carrinho.service';

@Component({
  selector: 'app-bebidas',
  standalone: false,

  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent implements OnInit {

  bebidas: Card[] = [];
  amountBebida: number[] = []

  constructor(
    private bebidasService: BebidasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    this.bebidas = this.bebidasService.getBebidas();
    this.bebidasService.amountBebidas = new Array(this.bebidas.length).fill(1)
    this.amountBebida = this.bebidasService.amountBebidas
  }

  decrementaBebida(index: number){
    this.bebidasService.decrementabebida(index)
  }

  incrementaBebida(index: number) {
    this.bebidasService.incrementaBebidas(index)
  }

  addCart({index, tipo}: {index: number, tipo: string}){
    let produtoSelecionado: Card | undefined
    let quantidade = 1

    if(tipo === 'bebida'){
      produtoSelecionado = this.bebidas[index]
      quantidade = this.amountBebida[index]
    }

    if(produtoSelecionado){
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
    }

  }
}
