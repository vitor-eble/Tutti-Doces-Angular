import { Component, OnInit } from '@angular/core';
import { TrufaService } from './trufa.service';
import { Card } from '../card.modal';

@Component({
  selector: 'app-trufas',
  standalone: false,

  templateUrl: './trufas.component.html',
  styleUrl: './trufas.component.css'
})
export class TrufasComponent implements OnInit {

  trufas: Card[] = [];

  constructor(private TrufaService: TrufaService) { }

  ngOnInit(){
    this.trufas = this.TrufaService.getTrufas();
  }
}
