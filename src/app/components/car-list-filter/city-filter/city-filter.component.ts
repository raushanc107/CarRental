import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityFilterModelComponent } from './city-filter-model/city-filter-model.component';
import { City } from '../../../models/ciltyList.model';

@Component({
  selector: 'app-city-filter',
  imports: [CommonModule],
  templateUrl: './city-filter.component.html',
  styleUrl: './city-filter.component.scss',
})
export class CityFilterComponent {
  currentselection: City = { id: 0, name: 'All Location', stateId: 0 };
  private modalService = inject(NgbModal);
  openModel() {
    const modalRef = this.modalService.open(CityFilterModelComponent);
    modalRef.componentInstance.currentselection = this.currentselection;

    modalRef.result
      .then((result) => {
        if (result) {
          this.currentselection = result; // Set selected city from modal
        }
      })
      .catch(() => {
        console.log('Modal dismissed');
      });
  }
}
