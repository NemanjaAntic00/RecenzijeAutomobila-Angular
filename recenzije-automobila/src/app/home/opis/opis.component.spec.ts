import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpisComponent } from './opis.component';

describe('OpisComponent', () => {
  let component: OpisComponent;
  let fixture: ComponentFixture<OpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
