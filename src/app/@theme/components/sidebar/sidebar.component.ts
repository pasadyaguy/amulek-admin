import { Component } from '@angular/core';
import { ToggleSidebarService } from 'src/app/@core/services/toggle-sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isExpanded: boolean = false;

  constructor(private toggleSidebarService: ToggleSidebarService) {}

  ngOnInit() {
    this.toggleSidebarService.getIsExpanded().subscribe((value) => {
      this.isExpanded = value;
    });
  }
}
