import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../components/login/login.component';
import { AuthService } from '../services/auth.service';
import { filter, firstValueFrom, map, Observable, switchMap, take } from 'rxjs';

export const AdminAuthGuard: CanActivateFn = (
  route,
  state
): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.loginComplete.pipe(
    // Wait until the login process is complete.
    filter((complete) => complete === true),
    take(1),
    // Once complete, get the current user value.
    switchMap(() => authService.user),
    take(1),
    map((user) => {
      if (user && user.token && user.role === 'Admin') {
        return true;
      } else {
        router.navigate(['/access-denied']);
        return false;
      }
    })
  );
};

export const UserAuthGuard: CanActivateFn = (
  route,
  state
): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.loginComplete.pipe(
    // Wait until loginComplete emits true.
    filter((complete) => complete === true),
    take(1),
    // Now switch to the user observable.
    switchMap(() => authService.user),
    take(1),
    map((user) => {
      if (user && user.role === 'user') {
        return true;
      } else {
        router.navigate(['/access-denied']);
        return false;
      }
    })
  );
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
  const authService = inject(AuthService);
  let userString = localStorage.getItem('user');
  let user = userString ? JSON.parse(userString) : undefined;
  if (user && user.token) {
    authService.updateUser(user);
    return true;
  } else {
    const modalService = inject(NgbModal);
    const modalRef = modalService.open(LoginComponent);
    return modalRef.result
      .then((result) => {
        if (result) {
          // After login, check localStorage again
          userString = localStorage.getItem('user');
          user = userString ? JSON.parse(userString) : undefined;
          if (user && user.token) {
            authService.updateUser(user);
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  }
};
