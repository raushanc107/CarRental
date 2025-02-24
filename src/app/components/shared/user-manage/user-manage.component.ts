import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-user-manage',
  imports: [
    MatCardModule,
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatSlideToggleModule,
  ],
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.scss',
})
export class UserManageComponent {
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  data: User[] = [];
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((data) => {
      this.data = data || [];
      this.dataSource.data = data || [];
      this.dataSource.paginator = this.paginator;
    });
    console.log(this.data);
  }
  title = '';

  displayedColumns: string[] = ['name', 'email', 'role', 'status'];

  toggleUserStatus(user: User) {
    user.isActive = !user.isActive;
    this.userService.updateUser(user).subscribe({
      next: (data) => {
        alert('successful');
      },
      error: (error) => {
        alert('Booking failed');
        user.isActive = !user.isActive;
      },
    });
    // console.log(`User ${user.email} is now ${user.isActive ? 'Active' : 'Inactive'}`);
    // Here you can make an API call to update the status in the backend
  }
}
