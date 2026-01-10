import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  @Output() closeSidebar = new EventEmitter<void>();

  onClose() {
    this.closeSidebar.emit();
  }

  onNavClick() {
    // Close sidebar on mobile when navigation item is clicked
    if (window.innerWidth < 992) {
      this.closeSidebar.emit();
    }
  
  }
}
