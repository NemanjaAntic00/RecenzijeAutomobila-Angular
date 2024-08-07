import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteriComponent } from './filteri.component';

describe('FilteriComponent', () => {
  let component: FilteriComponent;
  let fixture: ComponentFixture<FilteriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
