import { Component } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-availability-filter',
  imports: [FormsModule],
  templateUrl: './availability-filter.component.html',
  styleUrl: './availability-filter.component.scss',
})
export class AvailabilityFilterComponent {
  dropdownvalue: number = 0;
  constructor(private filterService: FilterService) {
    this.filterService.availabilitySubject.subscribe((data) => {
      this.filterService.availability = data;
      this.filterService.PerformFilter('availability filter');
    });
    this.filterService.availabilitySubject.next(this.dropdownvalue);
  }

  filterByAvailability() {
    this.filterService.availabilitySubject.next(this.dropdownvalue);
  }
}
