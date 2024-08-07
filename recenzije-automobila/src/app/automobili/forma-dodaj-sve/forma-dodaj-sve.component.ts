import { Component, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forma-dodaj-sve',
  standalone: true,
  imports: [NgFor, FormsModule, RouterLink],
  templateUrl: './forma-dodaj-sve.component.html',
  styleUrl: './forma-dodaj-sve.component.css',
})
export class FormaDodajSveComponent {
  @Output() posaljiRecenziju = new EventEmitter<any>();

  stars = [1, 2, 3, 4, 5];
  rating = 0;
  selectedFiles: FileList | null = null;
  isModalOpen: boolean = false;
  animationState = 'visible';
  recenzija: any;
  model: any;
  cena: any;
  kilometraza: any;
  slika = '/assets/a3.jpg';
  godina: any;

  setRating(rating: number) {
    this.rating = rating;
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles?.length; i++) {
        this.slika = '/assets/' + this.selectedFiles[0].name;
        console.log(this.slika);
      }
    }
  }

  submitReview() {
    console.log(this.recenzija);
    this.posaljiRecenziju.emit({
      model: this.model,
      cena: this.cena,
      kilometraza: this.kilometraza,
      godina: this.godina,
      slika: this.slika,
      ocena: this.rating,
      recenzija: this.recenzija,
    });
  }
}
