import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AuthInterceptor } from 'angular-auth-oidc-client';
import { AuthConfigModule } from './app/@core/modules/auth-config.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AuthConfigModule),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideAnimations(),
    provideRouter([
      {
        path: 'pages',
        loadChildren: () =>
          import('./app/pages/pages-routing').then((m) => m.PAGES_ROUTES),
      },
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
      },
    ]),
  ],
}).catch((err) => console.error(err));
