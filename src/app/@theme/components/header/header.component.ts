import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import jwtDecode from 'jwt-decode';
import { UserInfo } from 'src/app/@core/interfaces/user-info';
import { SidebarService } from 'src/app/@core/services/sidebar.service';
import { ThemeService } from '../../theme.service';
import { UserComponent } from '../user/user.component';

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
