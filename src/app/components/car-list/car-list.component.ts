import { Component, OnInit } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';
import { CommonModule } from '@angular/common';
import { CarListTopbarComponent } from '../car-list-topbar/car-list-topbar.component';
import { CarListFilterComponent } from '../car-list-filter/car-list-filter.component';
import { Car } from '../../models/Cars.Model';
import { CarService } from '../../services/car.service';
import { CityListService } from '../../services/city-list.service';
import { City } from '../../models/ciltyList.model';
import { FilterService } from '../../services/filter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  imports: [
    CarCardComponent,
    CommonModule,
    CarListTopbarComponent,
    CarListFilterComponent,
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  Cars: Car[] = [];
  constructor(
    private carService: CarService,
    private filterService: FilterService,
    private router: Router,
    private route: ActivatedRoute,
    private cityService: CityListService
  ) {
    this.carService.carList.subscribe((data) => {
      this.Cars = data || [];
    });

    this.filterService.currentselectionSubject.subscribe((data) => {
      if (data.id === 0) {
        this.carService.AddCarsFromAPI();
      } else {
        this.carService.AddCarsByLocation(data.id);
      }
    });
  }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.cityService.cityList.subscribe((data) => {
      if (id != 0) {
        let city = data?.find((e) => e.id == id);
        this.filterService.currentselectionSubject.next(city!);
      }
    });
    this.cityService.AddCityFromAPI();
  }

  OpenCarDetail(carid: number, cityid: number) {
    this.router.navigate(['/car-detail', cityid, carid]);
  }
}
