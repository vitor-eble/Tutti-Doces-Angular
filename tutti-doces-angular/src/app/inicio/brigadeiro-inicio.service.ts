import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class BrigadeiroInicioService {

  private brigadeiroInicio: Card[] = [
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/28-Brigadeiro_Klassisch.png',
      title: 'Clássico',
      description: 'Brigadeiro de chocolate meio-amargo com cacau 54%, o tradicional brigadeiro gourmet',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/48-Brigadeiro_Passionsfrucht_Schokolade.png',
      title: 'Chocolate ao leite',
      description: 'Brigadeiro gourmet de puro chocolate ao leite suiço',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/29-Brigadeiro_Casadinho.png',
      title: 'Casadinho',
      description: 'Combinação de chocolate amargo e brigadeiro branco',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png',
      title: 'Beijinho',
      description: 'Brigadeiro de coco, o tradicional beijinho gourmet',
    }
  ];

  getBrigadeiroInicio(): Card[] {
    return this.brigadeiroInicio;
  }

}
