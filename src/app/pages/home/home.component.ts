import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ThemeService } from 'src/app/@theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class HomeComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private oidcSecurityService: OidcSecurityService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.themeService.onThemeChange().subscribe((value) => {
      console.log(value);
    });

    this.oidcSecurityService.isAuthenticated$.subscribe((result) => {
      if (result.isAuthenticated) {
        this.oidcSecurityService.getAccessToken().subscribe((token) => {
          console.log(token);
        });
      }
    });
  }
}
