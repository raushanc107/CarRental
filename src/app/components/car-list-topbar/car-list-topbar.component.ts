import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-list-topbar',
  imports: [],
  templateUrl: './car-list-topbar.component.html',
  styleUrl: './car-list-topbar.component.scss',
})
export class CarListTopbarComponent {
  @Input() totalCars!: number;
  @Input() location!: string;
}
