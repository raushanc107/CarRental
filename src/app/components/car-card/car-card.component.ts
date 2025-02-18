import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Car } from '../../models/Cars.Model';

@Component({
  selector: 'app-car-card',
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {
  @Input() Car!: Car;

  calculateOldPrice(amount: number, discount: number): number {
    return amount - amount * (discount / 100);
  }

  calculateAvailabilityDate(day: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + day);
    return date;
  }
}
