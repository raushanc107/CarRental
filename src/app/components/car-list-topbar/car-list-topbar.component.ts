import { Component, Input } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CityListService } from '../../services/city-list.service';

@Component({
  selector: 'app-car-list-topbar',
  imports: [],
  templateUrl: './car-list-topbar.component.html',
  styleUrl: './car-list-topbar.component.scss',
})
export class CarListTopbarComponent {
  totalCars!: number;
  location!: string;
  constructor(
    private carservice: CarService,
    private cityservice: CityListService
  ) {
    this.carservice.carList.subscribe((data) => {
      this.totalCars = data?.length || 0;
    });
    this.cityservice.currentCitySelected.subscribe((data) => {
      this.location = data?.cityname || '';
    });
  }
}
