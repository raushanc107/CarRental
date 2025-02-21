import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BookingService } from '../../../services/booking.service';
import { BookingGet } from '../../../models/booking.model';

@Component({
  selector: 'app-booking-list',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.scss'
})
export class BookingListComponent {
  data:BookingGet[]=[];
  constructor(private bookingService: BookingService) {
    this.bookingService.getBookings().subscribe((data) => {
      this.data = data || [];
    });
    console.log(this.data);
  }
  title = '';
  displayedColumns: string[] = ['id', 'car', 'amount'];
}
