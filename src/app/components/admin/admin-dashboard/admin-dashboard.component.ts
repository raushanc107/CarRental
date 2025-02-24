import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    NgxEchartsModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: { echarts: () => import('echarts') }, // ✅ Fix: Provide ECharts configuration
    },
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {}

  charts = [
    {
      title: 'Sales Overview',
      options: this.getBarChartOptions(),
    },
    {
      title: 'Revenue Distribution',
      options: this.getPieChartOptions(),
    }
  ];

  getBarChartOptions(): EChartsOption {
    return {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
      yAxis: { type: 'value' },
      series: [{ type: 'bar', data: [12, 19, 3, 5, 2, 3] }],
    };
  }

  getPieChartOptions(): EChartsOption {
    return {
      series: [
        {
          type: 'pie',
          data: [
            { value: 10, name: 'Swift' },
            { value: 20, name: 'Creta' },
            { value: 30, name: 'Nexon' },
            { value: 30, name: 'XUV700' },
          ],
        },
      ],
    };
  }

  // getDoughnutChartOptions(): EChartsOption {
  //   return {
  //     series: [
  //       {
  //         type: 'pie',
  //         radius: ['50%', '70%'],
  //         data: [
  //           { value: 30, name: 'Product A' },
  //           { value: 10, name: 'Product B' },
  //           { value: 40, name: 'Product C' },
  //           { value: 20, name: 'Product D' },
  //         ],
  //       },
  //     ],
  //   };
  // }
}
