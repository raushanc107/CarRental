import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityFilterComponent } from './availability-filter.component';

describe('AvailabilityFilterComponent', () => {
  let component: AvailabilityFilterComponent;
  let fixture: ComponentFixture<AvailabilityFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
