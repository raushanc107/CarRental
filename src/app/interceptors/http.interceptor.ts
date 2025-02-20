import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Intercepted', req);
  const token = localStorage.getItem('token');
  const updatedreq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(updatedreq);
};
