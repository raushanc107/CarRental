import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { InvoiceComponent } from '../shared/invoice/invoice.component';
import { BookingListComponent } from '../shared/booking-list/booking-list.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-userdashboard',
  imports: [
    MatCardModule,
    CommonModule,
    NgxEchartsModule,
    BookingListComponent,
    InvoiceComponent,
  ],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.scss',
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: { echarts: () => import('echarts') }, // ✅ Fix: Provide ECharts configuration
    },
  ],
})
export class UserdashboardComponent {
  user: any;

  constructor(private authservice: AuthService) {
    this.authservice.user.subscribe((data) => {
      this.user = data;
    });
  }
}
