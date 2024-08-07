import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FilteriComponent } from './filteri/filteri.component';
import { SortirajComponent } from './sortiraj/sortiraj.component';
import { ListaAutomobilaComponent } from './lista-automobila/lista-automobila.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../recenzije/review.service';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { FormaComponent } from './forma/forma.component';
import { NgIf } from '@angular/common';
import { FormaDodajSveComponent } from './forma-dodaj-sve/forma-dodaj-sve.component';
import { DataService } from '../dataservice';

interface Car {
  id: number;
  image: string;
  name: string;
  year: number;
  mileage: number;
  price: number;
  rating: number;
  recension: string;
}

@Component({
  selector: 'app-automobili',
  standalone: true,
  imports: [
    FilteriComponent,
    SortirajComponent,
    ListaAutomobilaComponent,
    FormsModule,
    NavbarComponent,
    NgFor,
    FormaComponent,
    NgIf,
    FormaDodajSveComponent,
  ],
  templateUrl: './automobili.component.html',
  styleUrls: ['./automobili.component.css'],
})
export class AutomobiliComponent implements OnInit, OnDestroy {
  @Output() posaljiR = new EventEmitter<any>();

  data: any;
  dataSubscription: Subscription | null = null;
  carID = 0;
  isModalOpen: boolean = false;
  isFormaNova: boolean = false;
  animationState = 'visible';
  filters: any = {
    brand: '',
    model: '',
    year: null,
    price: null,
    mileage: null,
  };
  sortOption: string = '';
  filteredCars: Car[] = [];
  cars: Car[] = [
    {
      id: 1,
      image: 'assets/a4.jpg',
      name: 'Audi A4',
      year: 2018,
      mileage: 50000,
      price: 20000,
      rating: 4.5,
      recension: 'Pouzdan automobil sa odličnim performansama.',
    },
    {
      id: 2,
      image: 'assets/bmw3.jpg',
      name: 'BMW 3 Series',
      year: 2017,
      mileage: 60000,
      price: 25000,
      rating: 4.7,
      recension: 'Luksuzan i sportski osećaj u vožnji.',
    },
    {
      id: 3,
      image: 'assets/golf2016.jpg',
      name: 'Volkswagen Golf',
      year: 2016,
      mileage: 70000,
      price: 15000,
      rating: 4.6,
      recension: 'Pouzdan i ekonomičan automobil za svakodnevnu upotrebu.',
    },
    {
      id: 4,
      image: 'assets/a32019.jpg',
      name: 'Audi A3',
      year: 2019,
      mileage: 40000,
      price: 22000,
      rating: 4.8,
      recension: 'Kompaktan i luksuzan sa odličnim performansama.',
    },
    {
      id: 5,
      image: 'assets/bmw5.jpg',
      name: 'BMW 5 Series',
      year: 2015,
      mileage: 80000,
      price: 27000,
      rating: 4.4,
      recension: 'Prostran i udoban sa snažnim motorom.',
    },
    {
      id: 6,
      image: 'assets/passat.jpg',
      name: 'Volkswagen Passat',
      year: 2014,
      mileage: 90000,
      price: 18000,
      rating: 4.5,
      recension: 'Prostran, udoban i ekonomičan.',
    },
    {
      id: 7,
      image: 'assets/q5.jpg',
      name: 'Audi Q5',
      year: 2013,
      mileage: 95000,
      price: 23000,
      rating: 4.6,
      recension: 'Luksuzan SUV sa sportskim duhom.',
    },
    {
      id: 8,
      image: 'assets/x5p.jpg',
      name: 'BMW X5',
      year: 2012,
      mileage: 100000,
      price: 26000,
      rating: 4.3,
      recension: 'Prostran SUV sa izuzetnim performansama.',
    },
    {
      id: 9,
      image: 'assets/tiguan.jpg',
      name: 'Volkswagen Tiguan',
      year: 2011,
      mileage: 110000,
      price: 16000,
      rating: 4.4,
      recension: 'Kompaktan SUV sa dobrim performansama.',
    },
    {
      id: 10,
      image: 'assets/a6.jpg',
      name: 'Audi A6',
      year: 2010,
      mileage: 120000,
      price: 19000,
      rating: 4.5,
      recension: 'Luksuzan i prostran sedan sa snažnim motorom.',
    },
    {
      id: 11,
      image: 'assets/bmw7.jpg',
      name: 'BMW 7 Series',
      year: 2009,
      mileage: 130000,
      price: 30000,
      rating: 4.7,
      recension: 'Izuzetno luksuzan i udoban sa vrhunskim performansama.',
    },
    {
      id: 12,
      image: 'assets/jetta.jpg',
      name: 'Volkswagen Jetta',
      year: 2008,
      mileage: 140000,
      price: 10000,
      rating: 4.2,
      recension: 'Ekonomičan sedan sa dobrim karakteristikama.',
    },
    {
      id: 13,
      image: 'assets/tt.jpg',
      name: 'Audi TT',
      year: 2021,
      mileage: 20000,
      price: 35000,
      rating: 4.9,
      recension: 'Sportski automobil sa vrhunskim performansama i dizajnom.',
    },
  ];
  reviews: any[] = [];

  constructor(private dataService: DataService) {}

  posaljiRecenziju($event: any) {
    const auto = this.cars.find((car) => car.id == this.carID);
    if (auto) {
      auto.recension = $event;
      this.filteredCars = this.cars;
    }
    this.closeModal();
  }
  prikaziFormu($event: number) {
    this.carID = $event;
    this.openModal();
  }

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
  }

  novaR($event: any) {
    this.isFormaNova = false;
    const newCar: Car = {
      id: 24,
      image: $event.slika,
      name: $event.model,
      year: $event.godina,
      mileage: $event.kilometraza,
      price: $event.cena,
      rating: $event.ocena,
      recension: $event.recenzija,
    };
    this.cars.push(newCar);
    this.filteredCars = this.cars;
  }

  DodajNovu() {
    this.isFormaNova = true;
  }

  ngOnInit(): void {
    this.filteredCars = this.cars;
    this.dataSubscription = this.dataService.currentData.subscribe((data) => {
      this.data = data;
    });

    if (this.data) {
      console.log(this.data);
      const newCar: Car = {
        id: 24,
        image: this.data.slika,
        name: this.data.model,
        year: this.data.godina,
        mileage: this.data.kilometraza,
        price: this.data.cena,
        rating: this.data.ocena,
        recension: this.data.recenzija,
      };
      this.cars.push(newCar);
      this.filteredCars = this.cars;
      this.data = null;
    }
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  applyFilters(filters: any) {
    this.filters = filters;
    this.updateCarList();
  }

  changeSortOption(sortOption: string) {
    this.sortOption = sortOption;
    this.updateCarList();
  }

  updateCarList() {
    // Početna lista automobila
    this.filteredCars = this.cars.filter((car) => {
      return (
        (!this.filters.brand || car.name.includes(this.filters.brand)) &&
        (!this.filters.model || car.name.includes(this.filters.model)) &&
        (!this.filters.year || car.year === this.filters.year) &&
        (!this.filters.price || car.price <= this.filters.price) &&
        (!this.filters.mileage || car.mileage <= this.filters.mileage)
      );
    });

    let filter: Car[] = [];
    // Sortiranje prema izabranoj opciji
    if (this.sortOption === 'price') {
      filter = this.filteredCars.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'rating') {
      filter = this.filteredCars = this.filteredCars.sort(
        (a, b) => b.rating - a.rating
      );
    }

    this.filteredCars = filter;
  }
}
