import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class BebidasInicioService {

  private bebidasInicio: Card[] = [
    {
      id: 3001,
      image: 'https://avatars.mds.yandex.net/i?id=7f0fc6d8e7e403c2334ce675eefe436551721199-8437205-images-thumbs&n=13',
      title: 'Refrigerante Coca-Cola',
      description: '350ml',
      value: 6.00
    },
    {
      id: 3003,
      image: 'https://avatars.mds.yandex.net/i?id=45ab17ab9c60da01a0581d555882f390581651a0-12488046-images-thumbs&n=13',
      title: 'Refrigerante Sprite',
      description: '350ml',
      value:6.00
    },
    {
      id: 3008,
      image: 'https://avatars.mds.yandex.net/i?id=b83b6bcea8cbbe9add07d5046f2138e8ffb39695-10141919-images-thumbs&n=13',
      title: 'Energético Red Bull',
      description: '250ml',
      value: 6.00
    },
    {
      id: 3010,
      image: 'https://media.istockphoto.com/id/1255004081/pt/foto/strawberry-juice-in-glass-with-fruit.jpg?s=612x612&w=0&k=20&c=Wobf3pfM6KmtcVFXZrnTKeaclzHKwmUxaWO_mxRks0U=',
      title: 'Suco natural de morango',
      description: '400ml',
      value: 6.00
    }
  ]

  getBebidasInicio(): Card[]{
    return this.bebidasInicio
  }
}
