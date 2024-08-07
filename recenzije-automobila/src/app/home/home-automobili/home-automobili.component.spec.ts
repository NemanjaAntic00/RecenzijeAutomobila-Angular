import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutomobiliComponent } from './home-automobili.component';

describe('HomeAutomobiliComponent', () => {
  let component: HomeAutomobiliComponent;
  let fixture: ComponentFixture<HomeAutomobiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAutomobiliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAutomobiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
