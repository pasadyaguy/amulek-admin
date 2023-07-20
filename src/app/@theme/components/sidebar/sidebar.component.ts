import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';
import { RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        NgIf,
        MatDividerModule,
        RouterOutlet,
    ],
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
