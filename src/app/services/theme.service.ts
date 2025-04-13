import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject = new BehaviorSubject<'light' | 'dark'>('light')
  theme$ = this.themeSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const theme = saved ?? 'light';
    this.setTheme(theme)
   }

  toggleTheme() {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark'){
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }

  get currentTheme(): 'light' | 'dark' {
    return this.themeSubject.value;
  }
}
