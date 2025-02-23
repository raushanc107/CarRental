import { Injectable } from '@angular/core';
import { LoginModel, RegisterModel } from '../components/login/login.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user = new BehaviorSubject<any | undefined>(undefined);
  
  public activeFormSubject = new BehaviorSubject<'login' | 'register'>(
    'register'
  );

  private registerUrl = 'https://localhost:7271/api/Account/register';
  private loginUrl = 'https://localhost:7271/api/Account/login';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
    let user = localStorage.getItem('user');
    if (user != null) {
      this.updateUser(JSON.parse(user));
    } else {
      this.updateUser(undefined);
    }
  }

  public updateUser(USER: any | undefined) {
    this.user.next(USER);
  }

  register(user: RegisterModel): Observable<Object> {
    const pauload: any = {
      firstname: user.firstName,
      lastname: user.lastName,
      password: user.password,
      confirmPassword: user.password,
      email: user.email,
    };

    // Send POST request to the backend with the user's registration data
    return this.http.post(this.registerUrl, pauload);
  }

  login(credentials: LoginModel): Observable<Object> {
    // Using observer object to subscribe
    return this.http.post(this.loginUrl, credentials);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.user.next(undefined);
  }
}
