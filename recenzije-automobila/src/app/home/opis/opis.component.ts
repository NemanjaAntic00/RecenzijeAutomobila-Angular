import { Component, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-opis',
  standalone: true,
  imports: [],
  templateUrl: './opis.component.html',
  styleUrl: './opis.component.css',
  animations: [
    trigger('bounce', [
      transition(':enter', [
        animate(
          '1s ease-in',
          keyframes([
            style({ transform: 'translate(-50%, -50%)', offset: 0 }), // Početna pozicija (centar ekrana)
            style({ transform: 'translate(-37.5%, -80%)', offset: 0.2 }), // Prvi skok i pomak
            style({ transform: 'translate(-25%, -50%)', offset: 0.4 }), // Prvi povratak
            style({ transform: 'translate(-12.5%, -65%)', offset: 0.6 }), // Drugi skok i pomak
            style({ transform: 'translate(0, -50%)', offset: 0.8 }), // Drugi povratak
            style({ transform: 'translate(0, -50%)', offset: 1 }), // Kraj animacije
          ])
        ),
      ]),
    ]),
  ],
})
export class OpisComponent {
  @Output() prikaziR = new EventEmitter<string>();
  @Output() prikaziA = new EventEmitter<string>();

  prikaziRecenzije(nesto: string) {
    this.prikaziR.emit(nesto);
  }
  prikaziAutomobile(nesto: string) {
    this.prikaziA.emit(nesto);
  }
}
