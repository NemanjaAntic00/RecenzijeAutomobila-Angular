import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAutomobilaComponent } from './lista-automobila.component';

describe('ListaAutomobilaComponent', () => {
  let component: ListaAutomobilaComponent;
  let fixture: ComponentFixture<ListaAutomobilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAutomobilaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAutomobilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
