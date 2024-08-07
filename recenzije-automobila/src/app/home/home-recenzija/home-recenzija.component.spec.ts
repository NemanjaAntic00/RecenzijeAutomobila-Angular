import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecenzijaComponent } from './home-recenzija.component';

describe('HomeRecenzijaComponent', () => {
  let component: HomeRecenzijaComponent;
  let fixture: ComponentFixture<HomeRecenzijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRecenzijaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecenzijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
