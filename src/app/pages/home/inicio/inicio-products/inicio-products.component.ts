import { Component } from '@angular/core';

import { Card } from '../../../../card.modal';
import { CarrinhoService } from '../../../../services/carrinho.service';
import { BrigadeirosService } from '../../../../services/brigadeiros.service';
import { TrufaService } from '../../../../services/trufa.service';
import { BebidasService  } from '../../../../services/bebidas.service';

@Component({
  selector: 'app-inicio-products',
  standalone: false,

  templateUrl: './inicio-products.component.html',
  styleUrl: './inicio-products.component.css'
})
export class InicioProductsComponent {

  trufas: Card[] = [];
  brigadeiros: Card[] = [];
  bebidas: Card[] = [];

  amountBrigadeiro: number[] = []
  amounttrufa: number[] = []
  amountbebida: number[] = [];

  verMais: string = 'https://cdn-icons-png.flaticon.com/128/11431/11431124.png'

  constructor(
    private carrinhoService: CarrinhoService,
    private brigadeirosService: BrigadeirosService,
    public trufasService: TrufaService,
    private bebidasService: BebidasService,
  ){  }

  ngOnInit() {
    this.brigadeiros = this.brigadeirosService.getBrigadeiros().slice(0,4);
    this.brigadeirosService.amountBrigadeiros = new Array(this.brigadeiros.length).fill(1);
    this.amountBrigadeiro = this.brigadeirosService.amountBrigadeiros

    this.trufasService.getTrufasList().subscribe((trufas: Card[]) => {
      this.trufas = trufas.slice(0,4);
      this.trufasService.amountTrufas = new Array(this.trufas.length).fill(1);
      this.amounttrufa = this.trufasService.amountTrufas
    })

    this.bebidas = this.bebidasService.getBebidas().slice(0,4);
    this.bebidasService.amountBebidas = new Array(this.bebidas.length).fill(1)
    this.amountbebida = this.bebidasService.amountBebidas
  }

  decrementaBrigadeiro(index: number){
    this.brigadeirosService.decrementaBrigadeiros(index)
  }

  decrementaTrufa(index: number){
    this.trufasService.decrementaTrufas(index);
  }

  decrementaBebida(index: number){
    this.bebidasService.decrementabebida(index);
  }

  incrementaBrigadeiro(index: number){
    this.brigadeirosService.incrementaBrigadeiros(index)
  }

  incrementaTrufa(index: number){
    this.trufasService.incrementaTrufas(index)
  }

  incrementaBebida(index: number){
    this.bebidasService.incrementaBebidas(index)
  }

  addCart(index: number, tipo: string) {
    let produtoSelecionado: Card | undefined
    let quantidade = 1

    switch(tipo){
      case 'brigadeiro':
        produtoSelecionado = this.brigadeiros[index];
        quantidade = this.amountBrigadeiro[index];
        break
      case 'trufa':
        produtoSelecionado = this.trufas[index];
        quantidade = this.amounttrufa[index];
        break;
      case 'bebida':
        produtoSelecionado = this.bebidas[index];
        quantidade = this.amountbebida[index];
        break;
      default:
        console.log('Tipo de produto nao encontrado');
        return
    }

    if(produtoSelecionado){
      this.carrinhoService.adicionarProduto(produtoSelecionado, quantidade);
    }
  }

}
