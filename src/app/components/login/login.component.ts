import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface RegisterModel {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  activeForm: 'login' | 'register';
  // Reactive forms
  registerForm: FormGroup;
  loginForm: FormGroup;
  activeModal = inject(NgbActiveModal);
  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.authService.activeFormSubject.subscribe((data) => {
      this.activeForm = data;
    });
    // Initialize register form with regex validation
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|<>?]).{8,}$/
        ),
      ]),
    });

    // Initialize login form with regex validation
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|<>?]).{8,}$/
        ),
      ]),
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.authService.activeFormSubject.next(form);
  }

  register() {
    if (this.registerForm.valid) {
      const user: RegisterModel = this.registerForm.value;

      this.authService.register(user).subscribe({
        next: (response) => {
          this.snackbar.open('User registered successfully', 'Close');
          this.authService.activeFormSubject.next('login'); // Switch to login form after successful registration
        },
        error: (error) => {
          if (error.status == 200) {
            this.snackbar.open('User registered successfully', 'Close');
            this.authService.activeFormSubject.next('login'); // Switch to login form after successful registration
          } else {
            this.snackbar.open(`Registration failed. ${error}`, 'Close');
            console.error(error);
          }
        },
      });
    }
  }

  login() {
    if (this.loginForm.valid) {
      const credentials: LoginModel = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (response: any) => {
          this.snackbar.open('Login successful', 'Close');
          // Store JWT token (if you are using JWT for authentication)
          localStorage.setItem('token', response.token); // Store the JWT token
          localStorage.setItem('user', JSON.stringify(response)); // Store the JWT token
          this.authService.updateUser(response);
          this.activeModal.close(true);
          console.log(response);  
          if (String(response.role).toLowerCase() === 'admin') {
            this.router.navigateByUrl('/admin');
          }
        },
        error: (error) => {
          this.snackbar.open('Invalid email or password', 'Close');
          console.error(error);
        },
      });
    } else {
      this.snackbar.open('Please fill out all fields correctly', 'Close');
    }
  }
}
