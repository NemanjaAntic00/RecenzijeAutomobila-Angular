import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobiliComponent } from './automobili.component';

describe('AutomobiliComponent', () => {
  let component: AutomobiliComponent;
  let fixture: ComponentFixture<AutomobiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomobiliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomobiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
