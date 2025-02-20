import { Component, Input, OnInit, signal } from '@angular/core';
import { Car } from '../../models/Cars.Model';
import { FrequentltAskedQuestionComponent } from '../frequentlt-asked-question/frequentlt-asked-question.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { BookingPost } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  imports: [FrequentltAskedQuestionComponent, CurrencyPipe, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  @Input() car: Car;
  subscriptiontenure = signal(1);
  taxAmount: number;
  bookingCharge: number;
  processingFee: number = 200;
  deposit: number;
  totalAmount: number;

  booking: boolean = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    if (this.car) {
      this.taxAmount = this.car.carAmount * (this.car.carTax / 100);
      this.bookingCharge = this.car.carAmount + this.taxAmount;
      this.deposit = this.car.carAmount / 2;
      this.totalAmount = this.bookingCharge + this.processingFee + this.deposit;
    }
  }

  Book() {
    let book: BookingPost = {
      userid: 0,
      carid: this.car.carId,
      cityid: this.car.cityId,
      subscriptiontenure: this.subscriptiontenure(),
      monthlyFees: this.car.carAmount,
      taxPercentage: this.car.carTax,
      taxAmount: this.taxAmount,
      bookingCharge: this.bookingCharge,
      processingFees: this.processingFee,
      depositAmount: this.deposit,
      totalPayableAmount: this.totalAmount,
    };
    this.booking = true;
    this.bookingService.bookCar(book).subscribe({
      next: (data) => {
        alert('Booking successful');
        this.booking = false;
      },
      error: (error) => {
        alert('Booking failed');
        this.booking = false;
      },
    });
  }
}
