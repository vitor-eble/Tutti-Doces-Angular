import { Injectable } from '@angular/core';
import { Card } from '../card.modal';

@Injectable({
  providedIn: 'root'
})
export class BrigadeirosService {

  private brigadeiros: Card[] = [
    {
      id: 1001,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/28-Brigadeiro_Klassisch.png',
      title: 'Brigadeiro clássico',
      description: 'Brigadeiro de chocolate meio-amargo com cacau 54%',
      value: 3.00
    },
    {
      id: 1002,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/48-Brigadeiro_Passionsfrucht_Schokolade.png',
      title: 'Chocolate ao leite',
      description: 'Brigadeiro gourmet de puro chocolate ao leite suiço',
      value: 3.00
    },
    {
      id: 1003,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/29-Brigadeiro_Casadinho.png',
      title: 'Casadinho',
      description: 'Combinação de chocolate amargo e brigadeiro branco',
      value: 3.00
    },
    {
      id: 1004,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png',
      title: 'Beijinho',
      description: 'Brigadeiro de coco, o tradicional beijinho gourmet',
      value: 3.00
    },
    {
      id: 1005,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/45-Brigadeiro_Zitrone.png',
      title: 'Chocolate branco',
      description: 'Brigadeiro de chocolate branco com pérolas de chocolate',
      value: 3.00
    },
    {
      id: 1006,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/38-Brigadeiro_Erdnuss.png',
      title: 'Amendoin',
      description: 'Brigadeiro de amendoim e chocolate ao leite',
      value: 3.00
    },
    {
      id: 1007,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/37-Brigadeiro_Mandel.png',
      title: 'Amêndoa',
      description: 'Brigadeiro de amêndoas e chocolate branco',
      value: 3.00
    },
    {
      id: 1008,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/30-Brigadeiro_Marshmellow.png',
      title: 'Marshmallow',
      description: 'Brigadeiro de chocolate branco decorado  com mini marshmallows',
      value: 3.00
    },
    {
      id: 1009,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/Brigadeiro_haselnuss.png',
      title: 'Avelã',
      description: 'Brigadeiro de cacau 54% e avelãs ',
      value: 3.00
    },
    {
      id: 1010,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/22-Brigadeiro_Pistazien.png',
      title: 'Pistache',
      description: 'Brigadeiro de chocolate branco com pistache fresco',
      value: 3.00
    },
    {
      id: 1011,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/29-Brigadeiro_Orange.png',
      title: 'Laranja e Chocolate',
      description: 'Brigadeiro clássico de cacau 54% aromatizado com laranja fresca',
      value: 3.00
    },
    {
      id: 1012,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/7-walnuss.png',
      title: 'Cappuccino',
      description: 'Brigadeiro de café com leite com mini pérolas de chocolate',
      value: 3.00
    },
    {
      id: 1013,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/24-Brigadeiro_Salzkaramell.png',
      title: 'Caramelo salgado',
      description: 'Brigadeiro de caramelo salgado ',
      value: 3.00
    },
    {
      id: 1014,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png',
      title: 'Ninho',
      description: 'Brigadeiro Gourmet de leite ninho',
      value: 3.00
    },
    {
      id: 1015,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/8_scharf_und_wurzig.png',
      title: 'Quente e picante',
      description: 'Brigadeiro picante com cacau 54%',
      value: 3.00
    },
    {
      id: 1016,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/32-Brigadeiro_Caipirinha.png',
      title: 'Caipirinha',
      description: 'Brigadeiro de limão aromatizado com cachaça',
      value: 3.00
    },
    {
      id: 1017,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/47-Brigadeiro_Rainbow.png',
      title: 'Arco-íris',
      description: 'Brigadeiro clàssico com confeitos de açucar coloridos',
      value: 3.00
    },
    {
      id: 1018,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/44-Brigadeiro_Banane_Zimt.png',
      title: 'Banana e canela',
      description: 'Brigadeiro de banana e canela',
      value: 3.00
    },
    {
      id: 1019,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/5_lotus.png',
      title: 'Lotus',
      description: 'Lotus Biscoff Brigadeiro',
      value: 3.00
    },
    {
      id: 1020,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/4_kokosnuss-schokolade.png',
      title: 'Coco e chocolate',
      description: 'Brigadeiro de coco e clássico com cacau 54%',
      value: 3.00
    },
    {
      id: 1021,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/Brigadeiro_himbeere.png',
      title: 'Framboesa',
      description: 'Brigadeiro de framboesa ',
      value: 3.00
    },
    {
      id: 1022,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/23-Brigadeiro_Erdbeer.png',
      title: 'Ruby',
      description: 'Brigadeiro de chocolate branco com perolas crocantes de ruby chocolate',
      value: 3.00
    },
    {
      id: 1023,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/3_cheesecake.png',
      title: 'Cheesecake de framboesa',
      description: 'Brigadeiro de cheesecake de framboesa com chocolate branco',
      value: 3.00
    },
    {
      id: 1024,
      image: 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/35-Brigadeiro_Passionsfrucht.png',
      title: 'Maracujá',
      description: 'Brigadeiro de maracujá e chocolate branco',
      value: 3.00
    },
  ];

  getBrigadeiros(): Card[]{
    return this.brigadeiros
  }

  constructor() { }
}
