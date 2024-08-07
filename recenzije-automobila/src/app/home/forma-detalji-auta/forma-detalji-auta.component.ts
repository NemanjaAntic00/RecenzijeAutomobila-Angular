import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-forma-detalji-auta',
  standalone: true,
  imports: [],
  templateUrl: './forma-detalji-auta.component.html',
  styleUrl: './forma-detalji-auta.component.css',
})
export class FormaDetaljiAutaComponent {
  @Input() auto = {
    model: '',
    cena: '',
    godiste: '',
    slika: '',
    kilometraza: 0,
  };
  @Output() zatvoriFormu = new EventEmitter<any>();

  closeModal() {
    this.zatvoriFormu.emit(true);
  }
  submitForm(event: Event) {
    event.preventDefault();
    console.log('majmune');
  }
}
