import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  model = inject(NgbModal);
  user: any;
  constructor(private authService: AuthService) {
    this.authService.user.subscribe((data) => {
      this.user = data;
    });
  }

  onNavigate(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  Login() {
    let modalRef = this.model.open(LoginComponent);
  }
}
