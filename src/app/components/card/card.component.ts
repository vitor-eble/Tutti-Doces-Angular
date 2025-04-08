import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() produto: any;
  @Input() quantidade: number = 1;
  @Input() index!: number;
  @Input() tipo!: string;

  @Output() add = new EventEmitter()
  @Output() remove = new EventEmitter()
  @Output() cart = new EventEmitter<{index: number, tipo: string}>();
  @Output() produtoAdicionado = new EventEmitter<string>()

  addProduct(){
    this.add.emit(this.index);
  }

  removeProduct(){
    this.remove.emit(this.index);
  }

  addCart(){
    this.cart.emit({ index: this.index, tipo: this.tipo })
    this.produtoAdicionado.emit(this.produto.title)
  }

}
