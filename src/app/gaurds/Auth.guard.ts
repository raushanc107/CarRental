import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../components/login/login.component';

export const AdminAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token'); // ✅ Check for auth token
  if (token) {
    return true; // ✅ Allow access if token exists
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
    // // router.navigate(['/login']); // ✅ Redirect to login page
    // return false;
  }
};
