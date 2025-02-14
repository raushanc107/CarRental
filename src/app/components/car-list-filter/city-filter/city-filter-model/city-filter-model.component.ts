import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CityListService } from '../../../../services/city-list.service';
import { City } from '../../../../models/ciltyList.model';

@Component({
  selector: 'app-city-filter-model',
  imports: [],
  providers: [CityListService],
  templateUrl: './city-filter-model.component.html',
  styleUrl: './city-filter-model.component.scss',
})
export class CityFilterModelComponent {
  activeModal = inject(NgbActiveModal);
  cities: City[] = [];
  @Input() currentselection: City | undefined;

  constructor(private service: CityListService) {
    this.service.cityList.subscribe((data) => {
      this.cities = data || [];
    });
  }

  selectCity(city: City) {
    this.activeModal.close(city); // Return selected city to parent
  }
}
