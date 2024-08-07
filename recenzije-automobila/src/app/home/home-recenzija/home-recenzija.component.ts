import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home-recenzija',
  standalone: true,
  imports: [],
  templateUrl: './home-recenzija.component.html',
  styleUrl: './home-recenzija.component.css',
  animations: [
    trigger('rotate', [
      state('void', style({ transform: 'rotate(-180deg)', opacity: 0 })),
      transition(':enter', [
        animate(
          '0.5s ease-out',
          style({ transform: 'rotate(0deg)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class HomeRecenzijaComponent {
  @Input() model: string = '';
  @Input() recenzija: string = '';
  @Input() slika: string = '';
  recenzijaa() {
    throw new Error('Method not implemented.');
  }
}
