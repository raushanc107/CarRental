import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { InvoiceComponent } from '../../shared/invoice/invoice.component';
import { UserManageComponent } from '../../shared/user-manage/user-manage.component';
import { CarManageComponent } from '../../shared/car-manage/car-manage.component';
import { BookingListComponent } from '../../shared/booking-list/booking-list.component';

@Component({
  selector: 'app-admin',
  imports: [
    AdminDashboardComponent,
    CommonModule,
    BookingListComponent,
    InvoiceComponent,
    SidebarComponent,
    UserManageComponent,
    CarManageComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  isSidebarCollapsed = false;
  isdashboardShow = true;
  isInvoiceShow = false;
  isManageCarShow = false;
  isManageUserShow = false;
  isBookingShow = false;

  constructor() {}

  ngOnInit(): void {}

  onSidebarToggle(val: string) {
    this.isdashboardShow = false;
    this.isInvoiceShow = false;
    this.isManageCarShow = false;
    this.isManageUserShow = false;
    this.isBookingShow = false;
    if (val === 'dashboard') {
      this.isdashboardShow = true;
    } else if (val === 'manageCar') {
      this.isManageCarShow = true;
    } else if (val === 'manageUser') {
      this.isManageUserShow = true;
    } else if (val === 'invoice') {
      this.isInvoiceShow = true;
    } else {
      this.isBookingShow = true;
    }
  }
}
