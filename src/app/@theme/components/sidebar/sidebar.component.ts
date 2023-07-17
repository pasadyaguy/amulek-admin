import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isExpanded: boolean = false;
  isLocked: boolean = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.sidebarService.getIsExpanded().subscribe((value) => {
      this.isExpanded = value;
    });
    this.sidebarService.getIsLocked().subscribe((value) => {
      this.isLocked = value;
    });
  }

  onMouseOver() {
    this.sidebarService.expand();
  }

  onMouseOut() {
    this.sidebarService.collapse();
  }
}
