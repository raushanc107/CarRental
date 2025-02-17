import { Injectable } from '@angular/core';
import { Car } from '../models/Cars.Model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carListSubject = new BehaviorSubject<Car[] | undefined>(undefined);
  public carList = this.carListSubject.asObservable();

  private APIURL = 'https://localhost:7271/api/Car';

  constructor(private http: HttpClient) {}

  public AddCars(cities: Car[]) {
    this.carListSubject.next(cities);
  }


  public FilterByAvailability(day:number){
      if(day===0){
        
      }else{

      }
  }

  public AddCarsFromAPI() {
    this.http.get<Car[]>(this.APIURL).subscribe((data) => {
      this.AddCars(data);
    });
  }

  public AddCarsByLocation(cityid: number) {
    this.http.get<Car[]>(`${this.APIURL}/${cityid}`).subscribe((data) => {
      this.AddCars(data);
    });
  }
}
