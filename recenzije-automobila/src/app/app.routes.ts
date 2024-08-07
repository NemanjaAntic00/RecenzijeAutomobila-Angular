import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutomobiliComponent } from './automobili/automobili.component';
import { RecenzijeComponent } from './recenzije/recenzije.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { DodajRecezijuComponent } from './dodaj-receziju/dodaj-receziju.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'automobili', component: AutomobiliComponent },
  { path: 'recenzije', component: RecenzijeComponent },
  { path: 'o-nama', component: ONamaComponent },
  { path: 'dodaj-recenziju', component: DodajRecezijuComponent },
];
