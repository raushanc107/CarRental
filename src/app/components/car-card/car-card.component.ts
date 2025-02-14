import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {
  @Input() carName!: string;
  @Input() imageUrl!: string;
  @Input() fuelType!: string;
  @Input() transmission!: string;
  @Input() availabilityDate!: string;
  @Input() isNew!: boolean;
  @Input() isHybrid!: boolean;
  @Input() fuelSavings!: number;
  @Input() price!: number;
  @Input() oldPrice?: number;
}
