import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho-resumo',
  standalone: false,

  templateUrl: './carrinho-resumo.component.html',
  styleUrl: './carrinho-resumo.component.css'
})
export class CarrinhoResumoComponent implements OnInit {

  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(){
    this.carrinhoService.totalProduto$.subscribe(valor => {
      this.total = valor
    })
  }
}
