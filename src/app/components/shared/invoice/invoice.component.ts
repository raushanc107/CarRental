import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-invoice',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  title = 'Invoice';
  data = [
    { id: 1, name: 'Item A', status: 'Active' },
    { id: 2, name: 'Item B', status: 'Inactive' },
    { id: 3, name: 'Item C', status: 'Active' },
  ];

  displayedColumns: string[] = ['id', 'name', 'status'];
}
