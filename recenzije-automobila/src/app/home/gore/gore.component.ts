import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { OpisComponent } from '../opis/opis.component';
import { SlikaComponent } from './slika/slika.component';

@Component({
  selector: 'app-gore',
  standalone: true,
  imports: [OpisComponent, SlikaComponent],
  templateUrl: './gore.component.html',
  styleUrls: ['./gore.component.css'],
})
export class GoreComponent {
  @Output() obavestiH = new EventEmitter<string>();
  @Output() obavestiHA = new EventEmitter<string>();

  images: string[] = [
    'assets/a3.jpg',
    'assets/shake1.avif',
    'assets/shake2.avif',
    'assets/shake3.avif',
    'assets/shake.avif',
    'assets/poz.avif',
  ];

  obavestiHome(data: string) {
    this.obavestiH.emit(data);
  }

  obavestiHomeA(data: string) {
    this.obavestiHA.emit(data);
  }
}
