import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../components/login/login.component';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';

export const AdminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : undefined;
  if (user && user.token && user.role === 'Admin') {
    return true;
  } else {
    router.navigate(['/access-denied']);
    return false;
  }
};

export const UserAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : undefined;
  if (user && user.token && user.role === 'user') {
    return true;
  } else {
    router.navigate(['/access-denied']);
    return false;
  }
};

export const GeneralGuard: CanActivateFn = (route, state) => {
  console.log('general guard');
  const router = inject(Router);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : undefined;
  console.log(user);
  if (user) {
    if (user.role === 'Admin') {
      router.navigate(['/admin']);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : undefined;
  if (user && user.token) {
    return true;
  } else {
    let model = inject(NgbModal);
    let modalRef = model.open(LoginComponent);
    return modalRef.result
      .then((result) => {
        if (result) {
          console.log('auth guard model value post', result);
          return result;
        } else {
          console.log('auth guard model value post', result);
          return false;
        }
      })
      .catch(() => {
        console.log('Modal dismissed');
        return false;
      });
  }
};
