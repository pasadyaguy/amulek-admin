import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/@core/services/toggle-sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isExpanded: boolean = false;
  isLocked: boolean = false;

  constructor(private toggleSidebarService: ToggleSidebarService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.toggleSidebarService.getIsExpanded().subscribe((value) => {
      this.isExpanded = value;
    });
    this.toggleSidebarService.getIsLocked().subscribe((value) => {
      this.isLocked = value;
    });
  }

  onMouseOver() {
    this.toggleSidebarService.expand();
  }

  onMouseOut() {
    this.toggleSidebarService.collapse();
  }
}
