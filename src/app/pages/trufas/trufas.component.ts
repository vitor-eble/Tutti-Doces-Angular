import { Component, OnInit } from '@angular/core';

import { TrufaService } from '../../services/trufa.service';
import { Card } from '../../card.modal';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-trufas',
  standalone: false,
  templateUrl: './trufas.component.html',
  styleUrl: './trufas.component.css'
})
export class TrufasComponent implements OnInit {

  trufas: Card[] = [];
  valueProductTrufa: number[] = [];

  constructor(
    private TrufaService: TrufaService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    this.trufas = this.TrufaService.getTrufas();
    this.valueProductTrufa = new Array(this.trufas.length).fill(1)
  }

  decrementaTrufa(index: number) {
    if(this.valueProductTrufa[index] > 1){
      this.valueProductTrufa[index]--;
    }
  }

  incrementaTrufa(index: number){
    this.valueProductTrufa[index]++
  }

  addCart({ index, tipo }: { index:number, tipo: string }){
    let produtoSelecionado: Card | undefined
    let quantidade = 1

    if(tipo === 'trufa'){
      produtoSelecionado = this.trufas[index];
      quantidade = this.valueProductTrufa[index]
    }

    if(produtoSelecionado && quantidade > 0) {
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
    }
  }
}
