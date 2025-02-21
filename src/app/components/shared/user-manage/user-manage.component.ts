import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-manage',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.scss'
})
export class UserManageComponent {
  title = '';
  isSidebarCollapsed = false;
  data = [
    { id: 1, name: 'Item A', status: 'Active' },
    { id: 2, name: 'Item B', status: 'Inactive' },
    { id: 3, name: 'Item C', status: 'Active' },
  ];

  displayedColumns: string[] = ['id', 'name', 'status'];

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
