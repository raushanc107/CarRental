import {
  Component,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { CarService } from '../../../services/car.service';
import { CommonModule } from '@angular/common';
import { Car } from '../../../models/Cars.Model';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-price-range-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './price-range-filter.component.html',
  styleUrl: './price-range-filter.component.scss',
})
export class PriceRangeFilterComponent {
  Min: number[] = [];
  Max: number[] = [];
  minPrice: number;
  maxPrice: number;
  constructor(
    private carService: CarService,
    private filterService: FilterService
  ) {
    this.carService.OriginalCarListSubject.subscribe((data) => {
      this.calculatePriceRange(data || []);
    });

    this.filterService.MinPriceSubject.subscribe((data) => {
      this.minPrice = data;
      if (this.minPrice !== undefined) {
        if (this.minPrice >= this.maxPrice) {
          let index = this.Max.findIndex((e) => e == this.minPrice);
          index++;
          if (index < this.Max.length) {
            this.filterService.MaxPrice = data;
            this.filterService.MaxPriceSubject.next(this.Max[index]);
          }
        }
      }
      this.filterService.MinPrice = data;
      this.filterService.PerformFilter('min price');
    });

    this.filterService.MaxPriceSubject.subscribe((data) => {
      this.maxPrice = data;
      this.filterService.MaxPrice = data;
      this.filterService.PerformFilter('max price');
    });
  }

  minChange(): void {
    this.filterService.MinPriceSubject.next(this.minPrice);
  }
  maxChange(): void {
    this.filterService.MaxPriceSubject.next(this.maxPrice);
  }

  calculatePriceRange(data: Car[]) {
    if (data.length === 0) return;

    // Find min and max price
    let min = Math.min(...data.map((e) => e.carAmount));

    let max = Math.max(...data.map((e) => e.carAmount));

    // Floor the min to nearest 1000

    let minPrice = Math.floor(min / 1000) * 1000;
    if (!this.minPrice || this.minPrice < minPrice) {
      this.filterService.MinPriceSubject.next(minPrice);
    }
    // Ceil the max to nearest 1000
    let maxPrice = Math.ceil(max / 1000) * 1000;
    if (!this.maxPrice || this.maxPrice > maxPrice) {
      this.filterService.MaxPriceSubject.next(maxPrice);
    }

    // Generate price options
    this.Min = [];
    this.Max = [];
    for (let i = minPrice; i <= maxPrice; i += 1000) {
      this.Min.push(i);
      this.Max.push(i);
    }
  }

  isMinDisabled(_t12: number) {
    return _t12 >= Math.max(...this.Max);
  }
}
