import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajRecezijuComponent } from './dodaj-receziju.component';

describe('DodajRecezijuComponent', () => {
  let component: DodajRecezijuComponent;
  let fixture: ComponentFixture<DodajRecezijuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DodajRecezijuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajRecezijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
