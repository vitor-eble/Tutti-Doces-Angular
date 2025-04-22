import { Injectable } from '@angular/core';
import { Card } from '../card.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  amountBebidas: number[] = []

  constructor(private httpClient: HttpClient) { }

  getBebidasList(): Observable<any>{
    return this.httpClient.get<Card[]>('assets/bebidas-list.json')
  }

  getAmountBebidas(){
    return this.amountBebidas
  }

  incrementaBebidas(i: number){
    this.amountBebidas[i]++
  }

  decrementabebida(i: number){
    if(this.amountBebidas[i] > 1){
      this.amountBebidas[i]--
    }
  }

}
