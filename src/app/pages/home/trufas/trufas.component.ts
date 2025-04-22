import { Component, OnInit } from '@angular/core';

import { TrufaService } from '../../../services/trufa.service';
import { Card } from '../../../card.modal';
import { CarrinhoService } from '../../../services/carrinho.service';

@Component({
  selector: 'app-trufas',
  standalone: false,
  templateUrl: './trufas.component.html',
  styleUrl: './trufas.component.css'
})
export class TrufasComponent implements OnInit {

  trufas: Card[] = [];
  amountTrufa: number[] = [];

  constructor(
    private TrufaService: TrufaService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(){
    this.TrufaService.getTrufasList().subscribe((trufas: Card[]) => {
      this.TrufaService.amountTrufas = new Array(this.trufas.length).fill(1);
      this.amountTrufa = this.TrufaService.amountTrufas
    })


    // this.trufas = this.TrufaService.getTrufas();
    // this.TrufaService.amountTrufas = new Array(this.trufas.length).fill(1);
    // this.amountTrufa = this.TrufaService.amountTrufas
  }

  decrementaTrufa(index: number) {
    this.TrufaService.decrementaTrufas(index);
  }

  incrementaTrufa(index: number){
    this.TrufaService.incrementaTrufas(index);
  }

  addCart({ index, tipo }: { index:number, tipo: string }){
    let produtoSelecionado: Card | undefined
    let quantidade = 1

    if(tipo === 'trufa'){
      produtoSelecionado = this.trufas[index];
      quantidade = this.amountTrufa[index]
    }

    if(produtoSelecionado && quantidade > 0) {
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade)
    }
  }
}
