import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { DataService } from '../dataservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dodaj-receziju',
  standalone: true,
  imports: [FormsModule, NgFor, RouterLink],
  templateUrl: './dodaj-receziju.component.html',
  styleUrl: './dodaj-receziju.component.css',
})
export class DodajRecezijuComponent {
  model: any;
  godina: any;
  cena: any;
  kilometraza: any;
  komentar: any;
  rating = 0;
  slika: any;
  stars = [1, 2, 3, 4, 5];
  recenzija: any;

  selectedFiles: FileList | null = null;

  constructor(private dataService: DataService) {}

  sendData() {
    const data = {
      model: this.model,
      godina: this.godina,
      cena: this.cena,
      kilometraza: this.kilometraza,
      rating: this.rating,
      slika: this.slika,
      recenzija: this.recenzija,
    };
    console.log(data);
    this.dataService.changeData(data);
  }

  submitReview() {
    this.sendData();
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
  setRating(rating: number) {
    this.rating = rating;
  }
}
