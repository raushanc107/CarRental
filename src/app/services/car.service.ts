import { Injectable } from '@angular/core';
import { Car } from '../models/Cars.Model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  public OriginalCarListSubject = new BehaviorSubject<Car[] | undefined>(
    undefined
  );
  public OriginalCarList: Car[];

  private carListSubject = new BehaviorSubject<Car[] | undefined>(undefined);
  public carList = this.carListSubject.asObservable();

  private APIURL = 'https://localhost:7271/api/Car';

  constructor(private http: HttpClient) {}

  public AddCars(cities: Car[]) {
    this.carListSubject.next(cities);
  }

  public AddCarsFromAPI() {
    this.http.get<Car[]>(this.APIURL).subscribe((data) => {
      this.OriginalCarList = data;
      this.OriginalCarListSubject.next(data);

      //this.AddCars(data);
    });
  }

  public AddCarsByLocation(cityid: number) {
    this.http.get<Car[]>(`${this.APIURL}/${cityid}`).subscribe((data) => {
      this.OriginalCarList = data;
      this.OriginalCarListSubject.next(data);

      //this.AddCars(data);
    });
  }

  public AddCarsByLocationAndId(cityid: number, id: number): Observable<Car> {
    return this.http.get<Car>(`${this.APIURL}/${id}/${cityid}`);
  }
}
