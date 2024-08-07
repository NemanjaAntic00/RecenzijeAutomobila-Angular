import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecenzijeComponent } from './home-recenzije.component';

describe('HomeRecenzijeComponent', () => {
  let component: HomeRecenzijeComponent;
  let fixture: ComponentFixture<HomeRecenzijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRecenzijeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecenzijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
