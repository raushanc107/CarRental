import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-manage',
  imports: [MatCardModule, MatTableModule, CommonModule],
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.scss'
})
export class UserManageComponent {
  data: User[] = [];
  constructor(private userService: UserService){
      this.userService.getUsers().subscribe((data) => {
        this.data = data || [];
      });
      console.log(this.data);
    }
  title = '';

  displayedColumns: string[] = ['name', 'email','role','status'];
}
