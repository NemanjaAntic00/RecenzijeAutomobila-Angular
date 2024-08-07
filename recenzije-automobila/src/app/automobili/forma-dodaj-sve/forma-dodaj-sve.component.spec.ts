import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDodajSveComponent } from './forma-dodaj-sve.component';

describe('FormaDodajSveComponent', () => {
  let component: FormaDodajSveComponent;
  let fixture: ComponentFixture<FormaDodajSveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormaDodajSveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaDodajSveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
