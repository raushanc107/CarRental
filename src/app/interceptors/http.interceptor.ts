import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Intercepted', req);
  if (req.url.includes('/api/Booking')) {
    console.log('inside protected');
    const token = localStorage.getItem('token');
    const updatedreq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(updatedreq);
  }
  return next(req);
};
