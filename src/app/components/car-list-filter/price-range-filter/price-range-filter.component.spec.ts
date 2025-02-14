import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangeFilterComponent } from './price-range-filter.component';

describe('PriceRangeFilterComponent', () => {
  let component: PriceRangeFilterComponent;
  let fixture: ComponentFixture<PriceRangeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceRangeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceRangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
