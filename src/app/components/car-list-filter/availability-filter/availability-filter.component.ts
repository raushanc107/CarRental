import { Component } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-availability-filter',
  imports: [FormsModule],
  templateUrl: './availability-filter.component.html',
  styleUrl: './availability-filter.component.scss',
})
export class AvailabilityFilterComponent {
  dropdownvalue: number = 3;
  constructor(private carservice: CarService) {}

  filterByAvailability() {
    
  }
}
