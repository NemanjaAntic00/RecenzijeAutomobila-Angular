import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-sortiraj',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sortiraj.component.html',
  styleUrls: ['./sortiraj.component.css'],
  animations: [
    trigger('bounce', [
      transition(':enter', [
        animate(
          '1s ease-in',
          keyframes([
            style({ transform: 'translate(100px, 0)', offset: 0 }), // Početna pozicija
            style({ transform: 'translate(75px, -30px)', offset: 0.2 }), // Prvi skok i pomak
            style({ transform: 'translate(50px, 0)', offset: 0.4 }), // Prvi povratak
            style({ transform: 'translate(25px, -15px)', offset: 0.6 }), // Drugi skok i pomak
            style({ transform: 'translate(0, 0)', offset: 0.8 }), // Drugi povratak
            style({ transform: 'translate(0, 0)', offset: 1 }), // Kraj animacije
          ])
        ),
      ]),
    ]),
  ],
})
export class SortirajComponent {
  @Input() sortOption: string = '';
  @Output() sortOptionChange = new EventEmitter<string>();

  onSortChange() {
    this.sortOptionChange.emit(this.sortOption);
  }
}
