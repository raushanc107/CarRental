import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityFilterModelComponent } from './city-filter-model/city-filter-model.component';
import { City } from '../../../models/ciltyList.model';
import { CityListService } from '../../../services/city-list.service';

@Component({
  selector: 'app-city-filter',
  imports: [CommonModule],
  templateUrl: './city-filter.component.html',
  styleUrl: './city-filter.component.scss',
})
export class CityFilterComponent {
  currentselection: City;
  private modalService = inject(NgbModal);

  constructor(private cityService: CityListService) {
    this.cityService.currentCitySelected.subscribe((data) => {
      this.currentselection = data;
    });
  }

  openModel() {
    const modalRef = this.modalService.open(CityFilterModelComponent);
    modalRef.componentInstance.currentselection = this.currentselection;

    modalRef.result
      .then((result) => {
        if (result) {
          this.cityService.ChangeCity(result);
        }
      })
      .catch(() => {
        console.log('Modal dismissed');
      });
  }
}
