import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AutomobilComponent } from '../automobil/automobil.component';
import { NgFor } from '@angular/common';

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
  selector: 'app-lista-automobila',
  standalone: true,
  imports: [AutomobilComponent, NgFor],
  templateUrl: './lista-automobila.component.html',
  styleUrls: ['./lista-automobila.component.css'],
})
export class ListaAutomobilaComponent {
  @Output() prikaziF = new EventEmitter<number>();
  @Input() cars!: Car[];

  prikaziFormu($event: number | undefined) {
    this.prikaziF.emit($event);
  }
}
