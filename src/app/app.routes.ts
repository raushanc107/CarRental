import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'car-list',
    loadComponent: () =>
      import('./components/car-list/car-list.component').then(
        (c) => c.CarListComponent
      ),
  },
 // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent}
];
