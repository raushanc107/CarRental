import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/Cars.Model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-car-manage',
  imports: [MatCardModule, MatTableModule, CommonModule, MatPaginatorModule],
  templateUrl: './car-manage.component.html',
  styleUrl: './car-manage.component.scss',
})
export class CarManageComponent implements OnInit {
  dataSource = new MatTableDataSource<Car>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  cars: Car[] = [];
  constructor(private carService: CarService) {
    this.carService.OriginalCarListSubject.subscribe((data) => {
      this.cars = data || [];
      this.dataSource.data = data || [];
      this.dataSource.paginator = this.paginator;
    });
  }

  title = 'Cars';

  displayedColumns: string[] = ['name', 'brand', 'city', 'rentalAmount'];

  ngOnInit(): void {
    this.carService.AddCarsFromAPI();
  }
}
