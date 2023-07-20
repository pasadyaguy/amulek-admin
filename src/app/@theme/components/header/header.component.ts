import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/@core/interfaces/user-info';
import { SidebarService } from 'src/app/@core/services/sidebar.service';
import { ThemeService } from '../../theme.service';
import { NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from '../user/user.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        UserComponent,
        MatMenuModule,
        NgIf,
    ],
})
export class HeaderComponent implements OnInit {
  themeToggle!: boolean;
  user: UserInfo = new UserInfo();

  constructor(
    private sidebarService: SidebarService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {}

  changeTheme() {
    this.themeToggle
      ? this.themeService.setTheme('light-mode')
      : this.themeService.setTheme('dark-mode');
    this.themeToggle = !this.themeToggle;
  }

  toggleSideNav() {
    this.sidebarService.toggle();
  }
}
