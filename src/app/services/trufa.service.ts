import { Injectable } from '@angular/core';
import { Card } from '../card.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrufaService {
  amountTrufas: number[] = []

  constructor(private httpClient: HttpClient) { }

  getTrufasList(): Observable<any>{
    return this.httpClient.get<Card[]>('assets/trufas-list.json')
  }

  getAmountTrufas(){
    return this.amountTrufas
  }

  decrementaTrufas(i: number){
    if(this.amountTrufas[i] > 1){
      this.amountTrufas[i]--
    }
  }

  incrementaTrufas(i: number){
    this.amountTrufas[i]++
  }
}
