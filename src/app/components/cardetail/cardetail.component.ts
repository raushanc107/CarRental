import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/Cars.Model';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardetail',
  imports: [CommonModule],
  templateUrl: './cardetail.component.html',
  styleUrl: './cardetail.component.scss',
})
export class CardetailComponent implements OnInit {
  car: Car;
  faqs = [
    'How can I pay the balance amount in case of pay on delivery?',
    'What documents do I need?',
    'How will I know the time of delivery?',
    'What happens if I fail to make the remaining payment before delivery?',
  ];
  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let carid = parseInt(this.route.snapshot.paramMap.get('carid') || '0');
    let cityid = parseInt(this.route.snapshot.paramMap.get('cityid') || '0');
    this.carService.AddCarsByLocationAndId(cityid, carid).subscribe((data) => {
      this.car = data;
    });
  }
}
