import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { HomeRecenzijeComponent } from './home-recenzije/home-recenzije.component';
import { HomeAutomobiliComponent } from './home-automobili/home-automobili.component';
import { OpisComponent } from './opis/opis.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { GoreComponent } from './gore/gore.component';
import { FormsModule } from '@angular/forms';
import { FormaDetaljiAutaComponent } from './forma-detalji-auta/forma-detalji-auta.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    HomeRecenzijeComponent,
    HomeAutomobiliComponent,
    OpisComponent,
    NavbarComponent,
    RouterLink,
    GoreComponent,
    FormsModule,
    FormaDetaljiAutaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeAndRotate', [
      state('visible', style({ transform: 'rotate(0deg)', opacity: 1 })),
      state(
        'hidden',
        style({ transform: 'rotate(90deg) translate(-50%, 50%)', opacity: 0 })
      ),
      transition('visible => hidden', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class HomeComponent {
  auto = {
    model: '',
    cena: '',
    godiste: '',
    slika: '',
    kilometraza: 0,
  };

  recenzijee = [
    {
      model: 'Volkswagen passat CC',
      recenzija:
        'Posetilac je bio prijatno iznenađen stanjem automobila. Istakao je da vozilo izgleda još bolje uživo nego na slikama, dobro je održavano i bez vidljivih oštećenja. Takođe je bio zadovoljan pristupačnošću prodavca i celokupnim iskustvom pregleda vozila.',
      slika: '/assets/ccr.jpg',
    },

    {
      model: 'Renault Twingo',
      recenzija:
        'Posetilac je bio razočaran stanjem automobila, navodeći da su slike na sajtu bile neprecizne i da je vozilo imalo skrivena oštećenja koja nisu bila pomenuta. Istakao je da su kilometraža i godina proizvodnje bili netačno predstavljeni, što je stvorilo neprijatno iskustvo.',
      slika: '/assets/twingo.jpeg',
    },

    {
      model: 'BMW Series 3 F30',
      recenzija:
        'Kupac je bio izuzetno zadovoljan automobilom, ističući da je u odličnom stanju i da je prodavac bio profesionalan i ljubazan. Pohvalio je kako unutrašnjost, tako i vožnju, te je rekao da je iskustvo bilo veoma pozitivno.',
      slika: '/assets/f30.webp',
    },
  ];

  images: string[] = [
    'assets/a3.jpg',
    'assets/mercedes.jpg',
    'assets/poz.avif',
  ];

  automobilii = [
    {
      model: 'Volkswagen Passat CC',
      cena: 'Cena: 10,000€',
      godiste: 'Godina proizvodnje: 2011',
      slika: 'assets/cc.jpg',
      kilometraza: 215122,
    },
    {
      model: 'Audi A3',
      cena: 'Cena: 23,750€',
      godiste: 'Godina proizvodnje: 2022',
      slika: 'assets/a3.jpg',
      kilometraza: 60000,
    },
    {
      model: 'BMW Series 5 F10',
      cena: 'Cena: 13,450€',
      godiste: 'Godina proizvodnje: 2012',
      slika: 'assets/f10.jpg',
      kilometraza: 180122,
    },
    {
      model: 'Renault Megane',
      cena: 'Cena: 9800€',
      godiste: 'Godina proizvodnje: 2017',
      slika: 'assets/megan.jpg',
      kilometraza: 23442,
    },
    {
      model: 'Mercedes Benz E Class',
      cena: 'Cena: 32000€',
      godiste: 'Godina proizvodnje: 2018',
      slika: 'assets/mercedes.jpg',
      kilometraza: 82000,
    },
    {
      model: 'Audi Q5',
      cena: 'Cena: 17000€',
      godiste: 'Godina proizvodnje: 2015',
      slika: 'assets/q5.jpg',
      kilometraza: 285122,
    },
    {
      model: 'Passat B8',
      cena: 'Cena: 15000€',
      godiste: 'Godina proizvodnje: 2016',
      slika: 'assets/b8.jpg',
      kilometraza: 242122,
    },
  ];

  isModalOpen: boolean = false;
  animationState = 'visible';

  marka: string = '';
  model: string = '';
  godiste: number | undefined;
  kilometraza: number | undefined;
  slika: string = 'assets/a3.jpg';

  recenzije = false;
  automobili = true;
  selectedTab: string | null = 'automobili';

  openModal() {
    this.isModalOpen = true;
    this.animationState = 'visible';
  }

  closeModal() {
    this.animationState = 'hidden';
    this.isModalOpen = false;
  }

  submitForm() {
    this.closeModal();
    console.log(this.kilometraza);
  }

  zatvoriFormu() {
    this.closeModal();
  }
  prikaziFormu($event: string) {
    this.openModal();
    let auto = this.automobilii.find((r) => r.model === $event);
    if (auto) {
      this.auto = auto;
    }
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    if (tab === 'recenzije') {
      this.recenzije = true;
      this.automobili = false;
    } else {
      this.recenzije = false;
      this.automobili = true;
    }
  }

  Recenzije(tab: string) {
    this.selectedTab = tab;
    this.recenzije = true;
    this.automobili = false;
  }

  Automobili(tab: string) {
    this.selectedTab = tab;
    this.recenzije = false;
    this.automobili = true;
  }
}
