import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityFilterModelComponent } from './city-filter-model/city-filter-model.component';
import { City } from '../../../models/ciltyList.model';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-city-filter',
  imports: [CommonModule],
  templateUrl: './city-filter.component.html',
  styleUrl: './city-filter.component.scss',
})
export class CityFilterComponent {
  currentselection: City;
  private modalService = inject(NgbModal);

  constructor(private filterService: FilterService) {
    this.filterService.currentselectionSubject.subscribe((data) => {
      this.currentselection = data;
    });
  }

  openModel() {
    const modalRef = this.modalService.open(CityFilterModelComponent);
    modalRef.componentInstance.currentselection = this.currentselection;

    modalRef.result
      .then((result) => {
        if (result) {
          this.filterService.currentselectionSubject.next(result);
        }
      })
      .catch(() => {
        console.log('Modal dismissed');
      });
  }
}
