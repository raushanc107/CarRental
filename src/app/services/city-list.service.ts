import { Injectable } from '@angular/core';
import { City } from '../models/ciltyList.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CityListService {
  private cityListSubject = new BehaviorSubject<City[] | undefined>(undefined);
  public cityList = this.cityListSubject.asObservable();

  constructor() {
    let cities: City[] = [
      { id: 1, name: 'Mumbai', stateId: 1 },
      { id: 2, name: 'Delhi', stateId: 2 },
      { id: 3, name: 'Bangalore', stateId: 3 },
      { id: 4, name: 'Hyderabad', stateId: 4 },
      { id: 5, name: 'Chennai', stateId: 5 },
      { id: 6, name: 'Kolkata', stateId: 6 },
      { id: 7, name: 'Pune', stateId: 7 },
      { id: 8, name: 'Jaipur', stateId: 8 },
      { id: 9, name: 'Ahmedabad', stateId: 9 },
      { id: 10, name: 'Surat', stateId: 10 },
      { id: 11, name: 'Lucknow', stateId: 11 },
      { id: 12, name: 'Kanpur', stateId: 12 },
      { id: 13, name: 'Nagpur', stateId: 13 },
      { id: 14, name: 'Indore', stateId: 14 },
      { id: 15, name: 'Thane', stateId: 15 },
      { id: 16, name: 'Bhopal', stateId: 16 },
      { id: 17, name: 'Visakhapatnam', stateId: 17 },
      { id: 18, name: 'Patna', stateId: 18 },
      { id: 19, name: 'Vadodara', stateId: 19 },
      { id: 20, name: 'Ghaziabad', stateId: 20 },
    ];
    this.cityListSubject.next(cities);
  }
}
