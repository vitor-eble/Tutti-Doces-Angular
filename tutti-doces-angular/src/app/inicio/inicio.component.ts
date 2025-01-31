import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  verMais: string = 'https://cdn-icons-png.flaticon.com/128/11431/11431124.png'

  brigadeiro: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/28-Brigadeiro_Klassisch.png';
  chocolateAoLeite: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/48-Brigadeiro_Passionsfrucht_Schokolade.png';
  casadinho: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/29-Brigadeiro_Casadinho.png';
  beijinho: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png';
}
