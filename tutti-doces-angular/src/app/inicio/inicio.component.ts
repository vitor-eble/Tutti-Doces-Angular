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

  trufaBrigadeiro: string = 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_06-f56c7232acd3da347217271804971475-480-0.webp';
  trufaSuica: string = 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_03-976785eac4c381d90d17279800453403-480-0.webp';
  trufaTradicional: string = 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_02-71837449d69df1e3b717279801985350-480-0.webp';
  trufaCereja: string = 'https://acdn.mitiendanube.com/stores/001/071/840/products/truffa_07-de1516a93d1251bd3d17322828093319-480-0.webp';
}
