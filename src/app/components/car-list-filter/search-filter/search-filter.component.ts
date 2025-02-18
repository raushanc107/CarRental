import { Component, OnDestroy } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-search-filter',
  imports: [],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent implements OnDestroy {
  searchInput = new Subject<string>();
  constructor(private filterService: FilterService) {
    this.searchInput
      .pipe(debounceTime(1000))
      .subscribe((searchTerm: string) => {
        // Call your search function here
        this.filterService.searchInputSubject.next(searchTerm);
      });
    this.filterService.searchInputSubject.subscribe((data) => {
      this.filterService.searchInput = data;
      this.filterService.PerformFilter('search');
    });
  }

  onSearchInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement ? inputElement.value : '';
    this.searchInput.next(value);
    // your code here
  }

  ngOnDestroy() {
    this.searchInput.complete();
  }
}
