import { Component } from '@angular/core';

@Component({
  selector: 'app-brigadeiros',
  standalone: false,

  templateUrl: './brigadeiros.component.html',
  styleUrl: './brigadeiros.component.css'
})
export class BrigadeirosComponent {

  brigadeiro: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/28-Brigadeiro_Klassisch.png';
  chocolateAoLeite: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/48-Brigadeiro_Passionsfrucht_Schokolade.png';
  casadinho: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/29-Brigadeiro_Casadinho.png';
  beijinho: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png';
  chocolateBranco: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/45-Brigadeiro_Zitrone.png';
  amendoin: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/38-Brigadeiro_Erdnuss.png';
  amendoa: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/37-Brigadeiro_Mandel.png';
  marshmallow: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/30-Brigadeiro_Marshmellow.png'

}
