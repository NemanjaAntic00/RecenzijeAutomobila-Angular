import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('0.5s ease-in', style({ opacity: 1 }))]),
    ]),
  ],
})
export class NavbarComponent {}
