import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Car } from '../../../models/Cars.Model';
import { CarService } from '../../../services/car.service';
import { BookingGet } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-invoice',
  imports: [MatCardModule, MatTableModule, CommonModule, MatPaginatorModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss',
})
export class InvoiceComponent {
  dataSource = new MatTableDataSource<BookingGet>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: BookingGet[] = [];
  constructor(private carService: BookingService) {
    this.carService.getBookings().subscribe((data) => {
      //console.log(data);
      this.data = data || [];
      this.dataSource.data = data || [];
      this.dataSource.paginator = this.paginator;
    });
  }
  title = 'Invoice';

  displayedColumns: string[] = [
    'id',
    'useremail',
    'monthlyfees',
    'taxpercentage',
    'taxAmount',
    'bookingCharge',
    'totalPayableAmount',
    'cretedon',
  ];
}
