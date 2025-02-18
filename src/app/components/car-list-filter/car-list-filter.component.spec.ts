import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListFilterComponent } from './car-list-filter.component';

describe('CarListFilterComponent', () => {
  let component: CarListFilterComponent;
  let fixture: ComponentFixture<CarListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
