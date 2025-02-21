import { Component, Input } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CityListService } from '../../services/city-list.service';
import { FilterService } from '../../services/filter.service';
import { Car } from '../../models/Cars.Model';

@Component({
  selector: 'app-car-list-topbar',
  imports: [],
  templateUrl: './car-list-topbar.component.html',
  styleUrl: './car-list-topbar.component.scss',
})
export class CarListTopbarComponent {
  totalCars!: number;
  location!: string;
  listOfCars: Car[];
  constructor(
    private carservice: CarService,
    private cityservice: FilterService
  ) {
    this.carservice.carList.subscribe((data) => {
      this.totalCars = data?.length || 0;
      this.listOfCars = data || [];
    });
    this.cityservice.currentselectionSubject.subscribe((data) => {
      this.location = data?.cityname || '';
    });
  }

  onOptionSelected(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    switch (selectedOption) {
      case 'price':
        this.listOfCars.sort((a,b) => a.carAmount - b.carAmount);
        this.carservice.AddCars(this.listOfCars);
        break;

      case 'availability':
        this.listOfCars.sort((a,b) => a.carAvailableIn - b.carAvailableIn);
        this.carservice.AddCars(this.listOfCars);
        break;
    }
  }
}
