import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Intercepted', req);
  if (req.url.includes('/api/Booking')) {
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
