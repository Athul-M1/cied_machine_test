import { Component } from '@angular/core';
import { CARD_DATA,USER_TABLE_COLUMNS,USER_TABLE_DATA } from 'src/constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 card_data = CARD_DATA
 columns = USER_TABLE_COLUMNS;
 users = USER_TABLE_DATA;


 isSidebarOpen = false;

 toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
  
  // Prevent body scroll when sidebar is open
  if (this.isSidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

closeSidebar() {
  this.isSidebarOpen = false;
  document.body.style.overflow = '';
}
}
