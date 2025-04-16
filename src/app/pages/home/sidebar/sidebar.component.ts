import { AuthService } from './../../../services/auth.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('sidebarAnimation', [
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('closed', style({
        transform: 'translateX(100%)',
        opacity: 0,
      })),
      transition('closed => open', [
        animate('300ms ease-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in')
      ]),
    ])
  ]
})
export class SidebarComponent {
  userName: string | null = '';
  userEmail: string | null = ''

  @Input() showSidebar!: boolean;
  @Output() logOutEvent = new EventEmitter<void>();
  @Output() toggleThemeEvent = new EventEmitter<void>();
  @Output() closeSidebarEvent = new EventEmitter<void>();

  constructor(private authService: AuthService){ }

  ngOnInit(){
    this.authService.getUserData().subscribe((user: any) =>{
      if(user){
        this.userName = user.name;
        this.userEmail = user.email
      }
    })
  }

  toggleTheme() {
    this.toggleThemeEvent.emit()
  }

  closeSidebar(){
    this.closeSidebarEvent.emit()
  }

  logOut(){
    this.logOutEvent.emit();
  }


}
