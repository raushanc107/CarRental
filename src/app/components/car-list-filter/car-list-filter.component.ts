import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CityFilterComponent } from './city-filter/city-filter.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { PriceRangeFilterComponent } from './price-range-filter/price-range-filter.component';
import { AvailabilityFilterComponent } from './availability-filter/availability-filter.component';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/Cars.Model';

@Component({
  selector: 'app-car-list-filter',
  imports: [
    CommonModule,
    CityFilterComponent,
    SearchFilterComponent,
    PriceRangeFilterComponent,
    AvailabilityFilterComponent,
  ],
  templateUrl: './car-list-filter.component.html',
  styleUrl: './car-list-filter.component.scss',
})
export class CarListFilterComponent {
  filters = [
    {
      title: 'Segment',
      options: [
        { name: 'Hatchback', count: 0 },
        { name: 'Sedan', count: 0 },
        { name: 'SUV', count: 0 },
      ],
    },
    {
      title: 'Fuel',
      options: [
        { name: 'Diesel', count: 0 },
        { name: 'Petrol', count: 0 },
      ],
    },
    {
      title: 'Transmission',
      options: [
        { name: 'Automatic', count: 0 },
        { name: 'Manual', count: 0 },
      ],
    },
    {
      title: 'Brand',
      options: [
        { name: 'Mahindra', count: 0 },
        { name: 'Maruti Suzuki', count: 0 },
        { name: 'Tata', count: 0 },
        { name: 'Hyundai', count: 0 },
        { name: 'Honda', count: 0 },
        { name: 'Nissan', count: 0 },
        { name: 'Ford', count: 0 },
        { name: 'Toyota', count: 0 },
        { name: 'MG', count: 0 },
        { name: 'Kia', count: 0 },
      ],
    },
  ];

  constructor(private carService: CarService) {
    this.carService.carList.subscribe((data) => {
      this.updateFilter(data || []);
    });
  }

  updateFilter(car: Car[]) {
    this.filters.forEach((filter) => {
      filter.options.forEach((option) => {
        option.count = 0;
      });
    });

    car.forEach((car) => {
      this.updateOptionCount('Brand', car.carBrand);
      this.updateOptionCount('Transmission', car.carTransmissionType);
      this.updateOptionCount('Fuel', car.carFuelType);
      this.updateOptionCount('Segment', car.carSegment);
    });
  }

  updateOptionCount(filterTitle: string, optionName: string) {
    const filter = this.filters.find((f) => f.title === filterTitle);
    if (filter) {
      let option = filter.options.find((o) => o.name === optionName);
      if (option) {
        option.count += 1;
      } else {
        filter.options.push({ name: optionName, count: 1 });
      }
    }
  }
}
