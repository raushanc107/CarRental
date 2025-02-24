import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BookingService } from '../../../services/booking.service';
import { BookingGet } from '../../../models/booking.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-booking-list',
  imports: [MatCardModule, MatTableModule, CommonModule, MatPaginatorModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss',
})
export class BookingListComponent {
  dataSource = new MatTableDataSource<BookingGet>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  data: BookingGet[] = [];
  constructor(private bookingService: BookingService) {
    this.bookingService.getBookings().subscribe((data) => {
      console.log(data);
      this.data = data || [];
      this.dataSource.data = data || [];
      this.dataSource.paginator = this.paginator;
    });
    console.log(this.data);
  }
  title = '';
  displayedColumns: string[] = ['id', 'useremail', 'car', 'amount'];
}
