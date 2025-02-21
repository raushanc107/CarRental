import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingGet, BookingPost } from '../models/booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private APIURL = 'https://localhost:7271/api/Booking';

  constructor(private http: HttpClient) {}

  public bookCar(booking: BookingPost): Observable<BookingGet> {
    return this.http.post<BookingGet>(this.APIURL, booking);
  }

  public getBookings(): Observable<BookingGet[]> {
    return this.http.get<BookingGet[]>(this.APIURL);
  }
}
