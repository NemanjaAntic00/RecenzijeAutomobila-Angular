import { Component } from '@angular/core';
import {
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-slika',
  standalone: true,
  imports: [],
  templateUrl: './slika.component.html',
  styleUrl: './slika.component.css',
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
export class SlikaComponent {
  @Input() images: string[] = [];
  randomImage: string | undefined;
  private intervalId: any;
  private previousIndexes: number[] = [];

  @ViewChild('image') imageElement!: ElementRef;

  ngOnInit(): void {
    this.showRandomImage();
    this.intervalId = setInterval(() => this.changeImage(), 2000); // Promena slike svake 2 sekunde
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private getRandomIndex(): number {
    if (this.previousIndexes.length === this.images.length) {
      this.previousIndexes = []; // Reset if all images have been shown
    }

    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * this.images.length);
    } while (this.previousIndexes.includes(randomIndex));

    this.previousIndexes.push(randomIndex);
    return randomIndex;
  }

  showRandomImage(): void {
    const randomIndex = this.getRandomIndex();
    this.randomImage = this.images[randomIndex];
  }

  changeImage(): void {
    if (!this.imageElement) return;

    const img = this.imageElement.nativeElement as HTMLImageElement;
    img.classList.add('shake');

    // Ukloni klasu nakon animacije da bi se mogla ponovo koristiti
    img.addEventListener(
      'animationend',
      () => {
        img.classList.remove('shake');
        this.showRandomImage();
      },
      { once: true }
    );
  }
}
