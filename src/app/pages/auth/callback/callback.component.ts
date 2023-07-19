import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  template: '',
})
export class CallbackComponent implements OnInit {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.checkAuth();
  }

  checkAuth() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {});
  }
}
