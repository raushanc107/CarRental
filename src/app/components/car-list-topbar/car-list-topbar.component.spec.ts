import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListTopbarComponent } from './car-list-topbar.component';

describe('CarListTopbarComponent', () => {
  let component: CarListTopbarComponent;
  let fixture: ComponentFixture<CarListTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
