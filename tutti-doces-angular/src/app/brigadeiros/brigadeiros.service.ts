import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class BrigadeirosService {

  private brigadeiros: Card[] = [
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
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/45-Brigadeiro_Zitrone.png',
      title: 'Chocolate branco',
      description: 'Brigadeiro de chocolate branco com pérolas de chocolate crocante',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/38-Brigadeiro_Erdnuss.png',
      title: 'Amendoin',
      description: 'Brigadeiro de amendoim e chocolate ao leite',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/37-Brigadeiro_Mandel.png',
      title: 'Amêndoa',
      description: 'Brigadeiro de amêndoas e chocolate branco',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/30-Brigadeiro_Marshmellow.png',
      title: 'Marshmallow',
      description: 'Brigadeiro de chocolate branco decorado  com mini marshmallows',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/Brigadeiro_haselnuss.png',
      title: 'Avelã',
      description: 'Brigadeiro de chocolate clássico com cacau 54% e avelãs',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/22-Brigadeiro_Pistazien.png',
      title: 'Pistache',
      description: 'Brigadeiro de chocolate branco com pistache fresco',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/29-Brigadeiro_Orange.png',
      title: 'Laranja e Chocolate',
      description: 'Brigadeiro clássico de cacau 54% aromatizado com laranja fresca',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/7-walnuss.png',
      title: 'Cappuccino',
      description: 'Brigadeiro de café com leite com mini pérolas de chocolate',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/24-Brigadeiro_Salzkaramell.png',
      title: 'Caramelo salgado',
      description: 'Brigadeiro de caramelo salgado e chocolate ao leite',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png',
      title: 'Ninho',
      description: 'Brigadeiro Gourmet de leite ninho',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/8_scharf_und_wurzig.png',
      title: 'Quente e picante',
      description: 'Brigadeiro picante com cacau 54%',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/32-Brigadeiro_Caipirinha.png',
      title: 'Caipirinha',
      description: 'Brigadeiro de limão aromatizado com cachaça',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/47-Brigadeiro_Rainbow.png',
      title: 'Arco-íris',
      description: 'Brigadeiro clàssico com confeitos de açucar coloridos',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/44-Brigadeiro_Banane_Zimt.png',
      title: 'Banana e canela',
      description: 'Brigadeiro de banana e canela',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/5_lotus.png',
      title: 'Lotus',
      description: 'Lotus Biscoff Brigadeiro',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/4_kokosnuss-schokolade.png',
      title: 'Coco e chocolate',
      description: 'Brigadeiro de coco e clássico com cacau 54%',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/Brigadeiro_himbeere.png',
      title: 'Framboesa',
      description: 'Brigadeiro de framboesa com chocolate branco',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/23-Brigadeiro_Erdbeer.png',
      title: 'Ruby',
      description: 'Brigadeiro de chocolate branco com perolas crocantes de ruby chocolate',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/3_cheesecake.png',
      title: 'Cheesecake de framboesa',
      description: 'Brigadeiro de cheesecake de framboesa com chocolate branco',
    },
    {
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/35-Brigadeiro_Passionsfrucht.png',
      title: 'Maracujá',
      description: 'Brigadeiro de maracujá e chocolate branco',
    },
  ];

  getBrigadeiros(): Card[]{
    return this.brigadeiros
  }

  constructor() { }
}
