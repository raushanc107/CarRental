import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list-filter',
  imports: [CommonModule],
  templateUrl: './car-list-filter.component.html',
  styleUrl: './car-list-filter.component.scss',
})
export class CarListFilterComponent {
  filters = [
    {
      title: 'Segment',
      options: [
        { name: 'Hatchback', count: 1 },
        { name: 'Sedan', count: 0 },
        { name: 'SUV/MUV', count: 1 }
      ]
    },
    {
      title: 'Fuel',
      options: [
        { name: 'Diesel', count: 0 },
        { name: 'Petrol', count: 2 }
      ]
    },
    {
      title: 'Transmission',
      options: [
        { name: 'Automatic', count: 1 },
        { name: 'Manual', count: 1 }
      ]
    },
    {
      title: 'Brand',
      options: [
        { name: 'Mahindra', count: 1 },
        { name: 'Maruti', count: 1 },
        { name: 'Tata', count: 0 },
        { name: 'Hyundai', count: 0 },
        { name: 'Honda', count: 0 },
        { name: 'Nissan', count: 0 },
        { name: 'Ford', count: 0 },
        { name: 'Toyota', count: 0 }
      ]
    }
  ];
}
