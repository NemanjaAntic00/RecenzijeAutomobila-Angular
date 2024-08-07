import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HomeAutomobilComponent } from '../home-automobil/home-automobil.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-automobili',
  standalone: true,
  imports: [HomeAutomobilComponent, NgFor],
  templateUrl: './home-automobili.component.html',
  styleUrl: './home-automobili.component.css',
})
export class HomeAutomobiliComponent {
  @Output() prikaziFormuu = new EventEmitter<string>();
  @Input() automobili: {
    slika: string;
    model: string;
    cena: string;
    godiste: string;
  }[] = [];

  auto() {
    console.log('Kliknut je prvi auto!');
  }

  prikaziFormu($event: string) {
    this.prikaziFormuu.emit($event);
  }
}
