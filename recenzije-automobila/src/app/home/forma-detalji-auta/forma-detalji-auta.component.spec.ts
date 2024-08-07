import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDetaljiAutaComponent } from './forma-detalji-auta.component';

describe('FormaDetaljiAutaComponent', () => {
  let component: FormaDetaljiAutaComponent;
  let fixture: ComponentFixture<FormaDetaljiAutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormaDetaljiAutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaDetaljiAutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
