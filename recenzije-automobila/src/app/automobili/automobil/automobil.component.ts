import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

interface Car {
  id: number;
  image: string;
  name: string;
  year: number;
  mileage: number;
  price: number;
  rating: number;
  recension: string;
}

@Component({
  selector: 'app-automobil',
  standalone: true,
  templateUrl: './automobil.component.html',
  styleUrls: ['./automobil.component.css'],
  imports: [RouterLink],
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
export class AutomobilComponent {
  @Output() prikaziFormu = new EventEmitter<number>();
  @Input() car!: Car;

  forma() {
    this.prikaziFormu.emit(this.car.id);
  }
}
