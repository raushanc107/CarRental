import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/Cars.Model';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-cardetail',
  imports: [CommonModule,BookingComponent],
  templateUrl: './cardetail.component.html',
  styleUrl: './cardetail.component.scss',
})
export class CardetailComponent implements OnInit {
  car: Car;

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let carid = parseInt(this.route.snapshot.paramMap.get('carid') || '0');
    let cityid = parseInt(this.route.snapshot.paramMap.get('cityid') || '0');
    this.carService.AddCarsByLocationAndId(cityid, carid).subscribe((data) => {
      this.car = data;
    });
  }
}
