import { Component, Input } from '@angular/core';
import { HomeRecenzijaComponent } from '../home-recenzija/home-recenzija.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-recenzije',
  standalone: true,
  imports: [HomeRecenzijaComponent, NgFor],
  templateUrl: './home-recenzije.component.html',
  styleUrl: './home-recenzije.component.css',
})
export class HomeRecenzijeComponent {
  @Input() recenzije: { model: string; recenzija: string; slika: string }[] =
    [];
  recenzija() {}
}
