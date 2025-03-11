import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  amountBebidas: number[] = []

  private bebidas: Card[] = [
    {
      id: 3001,
      image: 'https://avatars.mds.yandex.net/i?id=7f0fc6d8e7e403c2334ce675eefe436551721199-8437205-images-thumbs&n=13',
      title: 'Refrigerante Coca-Cola',
      description: '350ml',
      value: 6.00
    },
    {
      id: 3002,
      image: 'https://avatars.mds.yandex.net/i?id=035927d5a0b3fc3091baad09a45f5c5671cf3996297c55ab-12753080-images-thumbs&n=13',
      title: 'Refrigerante Guaraná',
      description: '350ml',
      value:  6.00
    },
    {
      id: 3003,
      image: 'https://avatars.mds.yandex.net/i?id=45ab17ab9c60da01a0581d555882f390581651a0-12488046-images-thumbs&n=13',
      title: 'Refrigerante Sprite',
      description: '350ml',
      value: 6.00
    },
    {
      id: 3004,
      image: 'https://avatars.mds.yandex.net/i?id=6a3e53dbb4f8689830bb5efcdd67b90aad60c48a-12890014-images-thumbs&n=13',
      title: 'Refrigerante Schweppes',
      description: '350ml',
      value: 6.00
    },
    {
      id: 3005,
      image: 'https://avatars.mds.yandex.net/i?id=bf48407e3e5ea0c818b2bfbf618c2e896ec9fbe2-11491093-images-thumbs&n=13',
      title: 'Refrigerante Fanta laranja',
      description: '350ml',
      value: 6.00
    },
    {
      id: 3006,
      image: 'https://avatars.mds.yandex.net/i?id=ae6f511e571daa09dc07f5d53d2b3a2d7fd5bf7c219aa7f8-5724346-images-thumbs&n=13',
      title: 'Refrigerante Pepsi',
      description: '350ml',
      value: 6.00
    },
    {
      id: 3007,
      image: 'https://avatars.mds.yandex.net/i?id=64668fc8791a847043d513e1db51269b-5287214-images-thumbs&n=13',
      title: 'Água Tônica',
      description: '350ml',
      value: 6.00
    },
    {
      id: 3008,
      image: 'https://avatars.mds.yandex.net/i?id=b83b6bcea8cbbe9add07d5046f2138e8ffb39695-10141919-images-thumbs&n=13',
      title: 'Energético Red Bull',
      description: '250ml',
      value: 6.00
    },
    {
      id: 3009,
      image: 'https://avatars.mds.yandex.net/i?id=bae796671278f354c8e6b2f8ce5de071cbf13fb9-8253063-images-thumbs&n=13',
      title: 'Suco natural de laranja',
      description: '400ml',
      value: 6.00
    },
    {
      id: 3010,
      image: 'https://media.istockphoto.com/id/1255004081/pt/foto/strawberry-juice-in-glass-with-fruit.jpg?s=612x612&w=0&k=20&c=Wobf3pfM6KmtcVFXZrnTKeaclzHKwmUxaWO_mxRks0U=',
      title: 'Suco natural de morango',
      description: '400ml',
      value: 6.00
    }
  ];

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

  getBebidas(): Card[] {
    return this.bebidas
  }

}
