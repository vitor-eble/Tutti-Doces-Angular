import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

import { trigger, style, animate, transition } from '@angular/animations';
import { updateProfile, User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class EditProfileComponent {
  @Output() closeEditProfileEvent = new EventEmitter<void>();

  userName: string = '';
  userEmail: string = '';
  photoURL: string | ArrayBuffer | null = '';
  user: firebase.User | null = null;
  isSaving: boolean = false;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.userName = user.displayName ?? '';
        this.userEmail = user.email ?? '';
        this.photoURL = user.photoURL ?? '';
      }
    });
  }

  async saveChanges(): Promise<void> {
    if (!this.user) return;

    this.isSaving = true;

    try {
      await updateProfile(this.user, {
        displayName: this.userName,
        photoURL: this.user.photoURL ?? ''
      });

      this.closeEditProfileEvent.emit();
    } catch (error) {
      console.error('Erro ao salvar alterações:', error);
      alert('Erro ao salvar: ' + (error as any).message);
    } finally {
      this.isSaving = false;
    }
  }

  closeEditProfile() {
    this.closeEditProfileEvent.emit();
  }
}
