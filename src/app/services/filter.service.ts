import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { City } from '../models/ciltyList.model';
import { CarService } from './car.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public availabilitySubject = new Subject<number>();
  public currentselectionSubject = new BehaviorSubject<City>({
    id: 0,
    cityname: 'All Location',
  });
  public MinPriceSubject = new Subject<number>();
  public MaxPriceSubject = new Subject<number>();
  public searchInputSubject = new Subject<string>();

  public Filters = new Subject<any[]>();

  public availability: number;
  public currentselection: City;
  public MinPrice: number;
  public MaxPrice: number;
  public searchInput: string;

  public FilterValue: any[];

  constructor(private carservice: CarService) {
    this.carservice.OriginalCarListSubject.subscribe((data) => {
      this.PerformFilter('orifinal change');
    });
  }

  PerformFilter(arg0: string) {
    console.log('filter performing - ', arg0);
    console.log(
      'values - ',
      this.availability,
      this.MinPrice,
      this.MaxPrice,
      this.searchInput
    );

    if (this.carservice.OriginalCarList) {
      let displayedList = this.carservice.OriginalCarList.filter((item) => {
        const matchesSearch =
          this.searchInput && this.searchInput.trim() != ''
            ? item.carBrand
                .toLowerCase()
                .includes(this.searchInput.toLowerCase()) ||
              item.carName
                .toLowerCase()
                .includes(this.searchInput.toLowerCase())
            : true;
        const matchesMinPrice =
          this.MinPrice !== null ? item.carAmount >= this.MinPrice : true;
        const matchesMaxPrice =
          this.MaxPrice !== null ? item.carAmount <= this.MaxPrice : true;
        const availability =
          this.availability && this.availability != 0
            ? item.carAvailableIn <= this.availability
            : true;

        return (
          matchesSearch && matchesMinPrice && matchesMaxPrice && availability
        );
      });
      console.log('filtered data = ', displayedList);
      this.carservice.AddCars(displayedList);
    }
  }
}
