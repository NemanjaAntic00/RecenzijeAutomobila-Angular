import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortirajComponent } from './sortiraj.component';

describe('SortirajComponent', () => {
  let component: SortirajComponent;
  let fixture: ComponentFixture<SortirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortirajComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
