import { ToastService } from './../../services/toast.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: false,

  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  message: string[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit(){
    this.toastService.toast$.subscribe((msgs) => (this.message = msgs));
  }

}
