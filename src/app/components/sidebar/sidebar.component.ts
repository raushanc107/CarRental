import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
  route: string;
  key:string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter();

  menuItems: MenuItem[] = [
    {
      icon: 'fas fa-home',
      label: 'Dashboard',
      isOpen: true,
      route: '/admin-dashboard',
      key:"dashboard",
    },
    {
      icon: 'fas fa-envelope',
      label: 'Bookings',
      route: '/invoice',
      isOpen: false,
      key:"bookings",
    },
    {
      icon: 'fas fa-cog',
      label: 'Cars',
      isOpen: false,
      route: '/car-manage',
      key:"manageCar",
    },
    {
      icon: 'fas fa-envelope',
      label: 'Users',
      route: '/user-manage',
      isOpen: false,
      key:"manageUser",
    },
    {
      icon: 'fas fa-envelope',
      label: 'Billings',
      route: '/invoice',
      isOpen: false,
      key:"invoice",
    },
  ];

  toggleSidebar() {
    // this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed) {
      this.menuItems.forEach(x=>x.isOpen = false)
      item.isOpen = !item.isOpen;
    }

    this.sidebarToggle.emit(item.key);
  }
}
