import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { ThemeService } from 'src/app/@theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private oidcSecurityService: OidcSecurityService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.themeService.onThemeChange().subscribe((value) => {
      console.log(value);
    });

    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } =
          loginResponse;

        console.log(loginResponse);
      });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  checkAuth() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {
        console.log('app authenticated', isAuthenticated);
        console.log('user', userData);
        console.log(`Current access token is '${accessToken}'`);
      });
  }

  getP1User() {
    // this.oidcSecurityService.getAccessToken().subscribe((user) => {
    //   console.log(user);
    // });
    let url = `https://api.pingone.com/v1/environments/384e8ed9-73c7-417a-aab9-fcfe8a961e76/users/96f64ca7-e81b-4545-adf7-480f67525016?expand=population`;
    this.httpClient.get(url).subscribe((res) => {
      console.log(res);
    });
  }

  protectedAPI() {
    this.httpClient
      .get('http://localhost/project/api/admin')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
