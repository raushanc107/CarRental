import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private APIURL = 'https://localhost:7271/api/User';

  constructor(private http: HttpClient) {}

  public updateUser(user: User): Observable<User> {
    return this.http.post<User>(this.APIURL + '/deactivate', user);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.APIURL);
  }
}
