import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class TrufaService {

  private trufas: Card[] = [
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_06-f56c7232acd3da347217271804971475-480-0.webp',
      title: 'Trufa de brigadeiro 30g',
      description: 'Trufa de chocolate ao leite recheada com creme de brigadeiro',
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_03-976785eac4c381d90d17279800453403-480-0.webp',
      title: 'Trufa suiça 30g',
      description: 'Trufa de chocolate ao leite com recheio cremoso sabor trufas'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_02-71837449d69df1e3b717279801985350-480-0.webp',
      title: 'Trufa tradicional 30g',
      description: 'Trufa de chocolate ao leite com recheio cremoso de chocolate'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_07-de1516a93d1251bd3d17322828093319-480-0.webp',
      title: 'Trufa de cereja 30g',
      description: 'Trufa de chocolate ao leite com recheio sabor cereja'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_12-07d05cfc265e12080717363474145994-480-0.webp',
      title: 'Trufa de paçoca 30g',
      description: 'Trufa de chocolate ao leite com recheio de pedaços de paçoca'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_04-copy-ed99166e73b2c9611917265856287648-480-0.webp',
      title: 'Trufa de cacau 70% 30g',
      description: 'Trufa de chocolate ao leite com recheio de cacau 70%'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_08jpg-45da75ad744fc21cc417279803069391-480-0.webp',
      title: 'Trufa de nozes 30g',
      description: 'Trufa de chocolate ao leite com recheio de nozes'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_10-78944698bb88c4813917347050489018-480-0.webp',
      title: 'Trufa de morango 30g',
      description: 'Trufa de chocolate ao leite com recheio sabor morango'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_13-19e99353407f8ba1b217271804318743-480-0.webp',
      title: 'Trufa de avelã 30g',
      description: 'Trufa de chocolate ao leite com recheio sabor avelã'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_09-copy-8036788c856335e2ae17297704729216-480-0.webp',
      title: 'Trufa de coco 30g',
      description: 'trufa de chocolate ao leite com recheio sabor coco'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/trufa_014l-d1635b90b52d1386cc17368725447794-480-0.webp',
      title: 'Trufa de marula 30g',
      description: 'Trufa de chocolate ao leite com recheio sabor marula'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_01-39fa19963c17b1d57c17308329795868-480-0.webp',
      title: 'Trufa de maracujá 30g',
      description: 'trufa de chocolate ao leite com recheio sabor maracujá'
    },
    {
      image: 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_05-43a993333298c2616b17308331188989-480-0.jpg',
      title: 'Trufa de limão 30g',
      description: 'trufa de chocolate ao leite com recheio sabor limão'
    }
  ];

  getTrufas(): Card[]{
    return this.trufas
  }

  constructor() { }
}
