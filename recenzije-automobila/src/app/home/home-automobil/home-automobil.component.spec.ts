import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutomobilComponent } from './home-automobil.component';

describe('HomeAutomobilComponent', () => {
  let component: HomeAutomobilComponent;
  let fixture: ComponentFixture<HomeAutomobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAutomobilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAutomobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
