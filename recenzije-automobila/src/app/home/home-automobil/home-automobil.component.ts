import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home-automobil',
  standalone: true,
  imports: [],
  templateUrl: './home-automobil.component.html',
  styleUrl: './home-automobil.component.css',
  animations: [
    trigger('slideUp', [
      state('void', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition(':enter', [
        animate(
          '0.5s ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class HomeAutomobilComponent {
  @Input() model: string = '';
  @Input() cena: string = '';
  @Input() godiste: string = '';
  @Input() slika: string = '';
  @Output() prikaziFormuu = new EventEmitter<string>();
  prikaziFormu() {
    this.prikaziFormuu.emit(this.model);
  }
}
