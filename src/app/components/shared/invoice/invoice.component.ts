import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { Car } from '../../../models/Cars.Model';
import { CarService } from '../../../services/car.service';
import { BookingGet } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-invoice',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  data: BookingGet[] = [];
    constructor(private carService: BookingService){
      this.carService.getBookings().subscribe((data) => {
        this.data = data || [];
      });
    }
  title = 'Invoice';

  displayedColumns: string[] = ['id', 'monthlyfees', 'taxpercentage','taxAmount','bookingCharge','totalPayableAmount','cretedon'];
}
