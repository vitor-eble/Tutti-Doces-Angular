import { Component, OnInit, Input } from '@angular/core';
import { BrigadeirosService } from './brigadeiros.service';
import { Card } from '../card.modal';

@Component({
  selector: 'app-brigadeiros',
  standalone: false,

  templateUrl: './brigadeiros.component.html',
  styleUrl: './brigadeiros.component.css'
})
export class BrigadeirosComponent implements OnInit {

  @Input() produto: any = {}

  brigadeiros: Card[] = [];
  valueProductBrigaidero: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor(
    private brigadeiroService: BrigadeirosService,
  ){ }

  ngOnInit() {
    this.brigadeiros = this.brigadeiroService.getBrigadeiros()
  }

  decrementaBrigadeiro(index: number) {
    if(this.valueProductBrigaidero[index] > 1){
      this.valueProductBrigaidero[index]--;
    }
  }

  incrementaBrigaidero(index: number){
    this.valueProductBrigaidero[index]++
  }

  addCart(index: number, tipo: string){
    let produto: Card | undefined;
    let quantidade = 1;

    if( tipo === 'brigadeiro'){
      produto = this.brigadeiros[index];
      quantidade = this.valueProductBrigaidero[index];
    }

    if(produto) {
      alert(` Você adicionou ${quantidade}x ${produto.title} ao carrinho! `)
    }
  }

}
