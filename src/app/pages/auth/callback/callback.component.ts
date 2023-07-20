import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class CallbackComponent implements OnInit {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {});
  }
}
