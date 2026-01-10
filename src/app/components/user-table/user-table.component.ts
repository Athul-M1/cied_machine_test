import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() showAction = true;
}
