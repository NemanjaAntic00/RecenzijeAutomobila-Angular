import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoreComponent } from './gore.component';

describe('GoreComponent', () => {
  let component: GoreComponent;
  let fixture: ComponentFixture<GoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
