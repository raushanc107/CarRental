import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'car-list',
    loadComponent: () =>
      import('./components/car-list/car-list.component').then(
        (c) => c.CarListComponent
      ),
  },
];
