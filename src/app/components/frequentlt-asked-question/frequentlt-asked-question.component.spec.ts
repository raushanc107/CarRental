import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentltAskedQuestionComponent } from './frequentlt-asked-question.component';

describe('FrequentltAskedQuestionComponent', () => {
  let component: FrequentltAskedQuestionComponent;
  let fixture: ComponentFixture<FrequentltAskedQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequentltAskedQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentltAskedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
