import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/@core/services/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private toggleSidbarService: ToggleSidebarService) {}

  ngOnInit() {}

  toggleSideNav() {
    console.log('toggleSideNav');
    this.toggleSidbarService.toggleValue();
  }
}
