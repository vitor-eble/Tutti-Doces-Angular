import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private _toast = new BehaviorSubject<string[]>([]);
  public toast$ = this._toast.asObservable();

  constructor() { }

  show(message: string){
    const current = this._toast.value;
    this._toast.next([...current, message]);

    setTimeout(() => {
      this._toast.next(this._toast.value.slice(1));
    }, 3000);
  }
}
