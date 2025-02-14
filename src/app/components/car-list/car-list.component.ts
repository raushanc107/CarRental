import { Component } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  imports: [CarCardComponent, CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent {
  cars = [
    {
      carName: 'Maruti Brezza 2024',
      imageUrl:
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      availabilityDate: '16 Feb 2025',
      isNew: true,
      isHybrid: true,
      fuelSavings: 15,
      price: 30460,
      oldPrice: 32647,
    },
    {
      carName: 'Maruti Swift 2024',
      imageUrl:
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      fuelType: 'Diesel',
      transmission: 'Manual',
      availabilityDate: '20 Feb 2025',
      isNew: true,
      isHybrid: true,
      fuelSavings: 18,
      price: 28990,
      oldPrice: 30647,
    },
  ];
}
