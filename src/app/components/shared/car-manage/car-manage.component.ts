import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/Cars.Model';

@Component({
  selector: 'app-car-manage',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './car-manage.component.html',
  styleUrl: './car-manage.component.scss',
})
export class CarManageComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService: CarService){
    this.carService.OriginalCarListSubject.subscribe((data) => {
      this.cars = data || [];
    });
  }

  title = 'Cars';

  displayedColumns: string[] = ['name', 'brand','city', 'rentalAmount'];

  ngOnInit(): void {
    this.carService.AddCarsFromAPI();
  }
}
