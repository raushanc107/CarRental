import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CityFilterComponent } from './city-filter/city-filter.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { PriceRangeFilterComponent } from './price-range-filter/price-range-filter.component';
import { AvailabilityFilterComponent } from './availability-filter/availability-filter.component';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/Cars.Model';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-car-list-filter',
  imports: [
    CommonModule,
    CityFilterComponent,
    SearchFilterComponent,
    PriceRangeFilterComponent,
    AvailabilityFilterComponent,
    FormsModule,
  ],
  templateUrl: './car-list-filter.component.html',
  styleUrl: './car-list-filter.component.scss',
})
export class CarListFilterComponent {
  filters = [
    {
      title: 'Segment',
      options: [
        { name: 'Hatchback', checked: false, count: 0 },
        { name: 'Sedan', checked: false, count: 0 },
        { name: 'SUV', checked: false, count: 0 },
      ],
    },
    {
      title: 'Fuel',
      options: [
        { name: 'Diesel', checked: false, count: 0 },
        { name: 'Petrol', checked: false, count: 0 },
      ],
    },
    {
      title: 'Transmission',
      options: [
        { name: 'Automatic', checked: false, count: 0 },
        { name: 'Manual', checked: false, count: 0 },
      ],
    },
    {
      title: 'Brand',
      options: [
        { name: 'Mahindra', checked: false, count: 0 },
        { name: 'Maruti Suzuki', checked: false, count: 0 },
        { name: 'Tata', checked: false, count: 0 },
        { name: 'Hyundai', checked: false, count: 0 },
        { name: 'Honda', checked: false, count: 0 },
        { name: 'Nissan', checked: false, count: 0 },
        { name: 'Ford', checked: false, count: 0 },
        { name: 'Toyota', checked: false, count: 0 },
        { name: 'MG', checked: false, count: 0 },
        { name: 'Kia', checked: false, count: 0 },
      ],
    },
  ];

  constructor(
    private carService: CarService,
    private filterService: FilterService
  ) {
    this.carService.carList.subscribe((data) => {
      this.updateFilter(data || []);
    });

    this.filterService.Filters.subscribe((data) => {
      this.filters = data;
      this.filterService.FilterValue = data;
      this.filterService.PerformFilter('other filters');
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

    //this.filterService.Filters.next(this.filters);
  }

  updateOptionCount(filterTitle: string, optionName: string) {
    const filter = this.filters.find((f) => f.title === filterTitle);
    if (filter) {
      let option = filter.options.find((o) => o.name === optionName);
      if (option) {
        option.count += 1;
      } else {
        filter.options.push({ name: optionName, checked: false, count: 1 });
      }
    }
  }

  filterUpdated() {
    this.filterService.Filters.next(this.filters);
  }
}
