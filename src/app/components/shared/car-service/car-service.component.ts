import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-car-service',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './car-service.component.html',
  styleUrl: './car-service.component.scss'
})
export class CarServiceComponent {
  title = 'Cars';
  data = [
    { id: 1, name: 'Item A', status: 'Active' },
    { id: 2, name: 'Item B', status: 'Inactive' },
    { id: 3, name: 'Item C', status: 'Active' },
  ];

  displayedColumns: string[] = ['id', 'name', 'status'];
}
