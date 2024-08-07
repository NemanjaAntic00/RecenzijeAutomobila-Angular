import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-filteri',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filteri.component.html',
  styleUrls: ['./filteri.component.css'],
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        animate(
          '0.5s ease-in',
          keyframes([
            style({ transform: 'scale(0.5)', opacity: 0, offset: 0 }),
            style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class FilteriComponent {
  @Input() filters: any;
  @Output() filtersChange = new EventEmitter<any>();

  applyFilters() {
    this.filtersChange.emit(this.filters);
  }
}
