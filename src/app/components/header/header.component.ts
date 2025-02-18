import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isHomePage: boolean = false;
  darkMode$: Observable<boolean>;

  constructor(private router: Router, private darkModeService: DarkModeService) {
    this.darkMode$ = this.darkModeService.darkMode$;
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
  ngOnInit() {
      this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/home';
    });
  }
  onNavigate(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
