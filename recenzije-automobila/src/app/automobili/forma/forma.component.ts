import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-forma',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './forma.component.html',
  styleUrl: './forma.component.css',
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        animate(
          '0.8s ease-in',
          keyframes([
            style({ transform: 'scale(0.5)', opacity: 0, offset: 0 }),
            style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class FormaComponent {
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  selectedFiles: FileList | null = null;
  isModalOpen: boolean = false;
  animationState = 'visible';
  recenzija: any;

  @Output() posaljiRecenziju = new EventEmitter<any>();

  setRating(rating: number) {
    this.rating = rating;
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  submitReview() {
    console.log(this.recenzija);
    this.posaljiRecenziju.emit(this.recenzija);
  }
}
