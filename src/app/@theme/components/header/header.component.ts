import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import jwtDecode from 'jwt-decode';
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
    private themeService: ThemeService,
    private oidcSecurityService: OidcSecurityService
  ) {}

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe((result) => {
      if (result.isAuthenticated) {
        this.oidcSecurityService.getAccessToken().subscribe((token) => {
          const decodedToken: any = jwtDecode(token);
          this.user.fullName =
            decodedToken.given_name + ' ' + decodedToken.family_name;
          this.user.title = decodedToken.title;
          this.user.userPhoto = decodedToken.photo;
        });
      }
    });
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

  logout(): void {
    this.oidcSecurityService.logoff().subscribe((result) => {});
  }
}
