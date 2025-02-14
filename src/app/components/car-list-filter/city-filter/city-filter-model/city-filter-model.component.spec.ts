import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFilterModelComponent } from './city-filter-model.component';

describe('CityFilterModelComponent', () => {
  let component: CityFilterModelComponent;
  let fixture: ComponentFixture<CityFilterModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityFilterModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityFilterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
