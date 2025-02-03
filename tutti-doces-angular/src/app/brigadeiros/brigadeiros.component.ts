import { Component, OnInit } from '@angular/core';
import { BrigadeirosService } from './brigadeiros.service';
import { Card } from '../card.modal';

@Component({
  selector: 'app-brigadeiros',
  standalone: false,

  templateUrl: './brigadeiros.component.html',
  styleUrl: './brigadeiros.component.css'
})
export class BrigadeirosComponent implements OnInit {

  brigadeiros: Card[] = [];

  constructor(private brigadeiroService: BrigadeirosService){ }

  ngOnInit() {
    this.brigadeiros = this.brigadeiroService.getBrigadeiros()
  }

}
