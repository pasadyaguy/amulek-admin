import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeToggle!: boolean;

  constructor(
    private sidebarService: SidebarService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeToggle = this.themeService.initTheme();
  }

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
