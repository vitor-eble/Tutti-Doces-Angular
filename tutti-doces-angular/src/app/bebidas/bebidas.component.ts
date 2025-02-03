import { Component, OnInit } from '@angular/core';
import { BebidasService } from './bebidas.service';
import { Card } from '../card.modal';

@Component({
  selector: 'app-bebidas',
  standalone: false,

  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent implements OnInit {

  bebidas: Card[] = []

  constructor(private bebidasService: BebidasService) { }

  ngOnInit(){
    this.bebidas = this.bebidasService.getBebidas()
  }
}
