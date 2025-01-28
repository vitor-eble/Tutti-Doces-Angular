import { Component } from '@angular/core';

@Component({
  selector: 'app-brigadeiros',
  standalone: false,

  templateUrl: './brigadeiros.component.html',
  styleUrl: './brigadeiros.component.css'
})
export class BrigadeirosComponent {

  brigadeiro: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/28-Brigadeiro_Klassisch.png';

  brigadeiroDeCoco: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4HNXeE8qlw-lgVSTx2pF6-HMDUgNrI1efw&s';

  brigadeiroNinho: string = 'https://dolcebrigadeiro.ch/modules/advancedcms/uploads/AdvancedCmsBlockImage/31-Brigadeiro_Beijinho.png';
}
