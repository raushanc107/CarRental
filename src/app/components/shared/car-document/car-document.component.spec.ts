import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDocumentComponent } from './car-document.component';

describe('CarDocumentComponent', () => {
  let component: CarDocumentComponent;
  let fixture: ComponentFixture<CarDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
