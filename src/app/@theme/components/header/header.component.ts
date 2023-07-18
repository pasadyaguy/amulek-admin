import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/@core/interfaces/user-info';
import { SidebarService } from 'src/app/@core/services/sidebar.service';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
