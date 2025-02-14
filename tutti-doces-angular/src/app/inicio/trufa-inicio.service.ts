import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class TrufaInicioService {

  private trufasInicio: Card[]= [
    {
      id: 2001,
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_06-f56c7232acd3da347217271804971475-480-0.webp',
      title: 'Trufa brigadeiro 30g',
      description: 'Trufa de chocolate ao leite  com creme de brigadeiro',
      value: 4.50
    },
    {
      id: 2002,
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_03-976785eac4c381d90d17279800453403-480-0.webp',
      title: 'Trufa suiça 30g',
      description: 'Trufa de chocolate ao leite com recheio cremoso sabor trufas',
      value: 4.50
    },
    {
      id: 2003,
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_02-71837449d69df1e3b717279801985350-480-0.webp',
      title: 'Trufa tradicional 30g',
      description: 'Trufa de chocolate ao leite com recheio cremoso de chocolate',
      value: 4.50
    },
    {
      id: 2004,
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_07-de1516a93d1251bd3d17322828093319-480-0.webp',
      title: 'Trufa de cereja 30g',
      description: 'Trufa de chocolate ao leite com recheio sabor cereja',
      value: 4.50,
    }
  ];

  getTrufasInicio(): Card[]{
    return this.trufasInicio;
  }
}
