import { Component, Input } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CityListService } from '../../services/city-list.service';
import { FilterService } from '../../services/filter.service';

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
    private cityservice: FilterService
  ) {
    this.carservice.carList.subscribe((data) => {
      this.totalCars = data?.length || 0;
    });
    this.cityservice.currentselectionSubject.subscribe((data) => {
      this.location = data?.cityname || '';
    });
  }
}
