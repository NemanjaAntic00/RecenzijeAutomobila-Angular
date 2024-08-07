import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { DataService } from '../dataservice';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-recenzije',
  templateUrl: './recenzije.component.html',
  styleUrls: ['./recenzije.component.css'],
  imports: [NavbarComponent, FormsModule, NgFor, RouterLink],
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
export class RecenzijeComponent {
  model: any;
  godina: any;
  cena: any;
  kilometraza: any;
  komentar: any;
  rating = 0;
  slika: any;
  stars = [1, 2, 3, 4, 5];

  selectedFiles: FileList | null = null;

  constructor(private dataService: DataService) {}

  sendData() {
    const data = {
      model: this.model,
      godina: this.godina,
      cena: this.cena,
      kilometraza: this.kilometraza,
      ocena: this.rating,
      slika: this.slika,
    };
    this.dataService.changeData(data);
  }

  submitReview() {
    this.sendData();
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }
}
