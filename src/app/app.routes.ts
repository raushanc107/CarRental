import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import {
  AdminAuthGuard,
  AuthGuard,
  GeneralGuard,
  UserAuthGuard,
} from './gaurds/Auth.guard';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

export const routes: Routes = [
  {
    path: 'car-list/:id',
    loadComponent: () =>
      import('./components/car-list/car-list.component').then(
        (c) => c.CarListComponent
      ),
    canActivate: [GeneralGuard],
  },
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent, canActivate: [GeneralGuard] },
  {
    path: 'user',
    component: UserdashboardComponent,
    canActivate: [AuthGuard, UserAuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard],
  },
  {
    path: 'car-detail/:cityid/:carid',
    loadComponent: () =>
      import('./components/cardetail/cardetail.component').then(
        (c) => c.CardetailComponent
      ),
    canActivate: [AuthGuard, UserAuthGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'access-denied', component: AccessDeniedComponent },
];
