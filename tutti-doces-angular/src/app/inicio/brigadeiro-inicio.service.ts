import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class BrigadeiroInicioService {

  private brigadeiroInicio: Card[] = [
    {
      id: 1001,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/28-Brigadeiro_Klassisch.png',
      title: 'Brigadeiro clássico',
      description: 'Brigadeiro de chocolate meio-amargo com cacau 54%',
      value: 'R$ 3,00'
    },
    {
      id: 1002,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/48-Brigadeiro_Passionsfrucht_Schokolade.png',
      title: 'Brigadeiro chocolate',
      description: 'Brigadeiro gourmet de puro chocolate ao leite suiço',
      value: 'R$ 3,00'
    },
    {
      id: 1003,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/29-Brigadeiro_Casadinho.png',
      title: 'Brigadeiro casadinho',
      description: 'Combinação de chocolate amargo e brigadeiro branco',
      value: 'R$ 3,00'
    },
    {
      id: 1004,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png',
      title: 'Brigadeiro beijinho',
      description: 'Brigadeiro de coco, o tradicional beijinho gourmet',
      value: 'R$ 3,00'
    }
  ];

  getBrigadeiroInicio(): Card[] {
    return this.brigadeiroInicio;
  }

}
