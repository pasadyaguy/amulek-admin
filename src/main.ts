import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
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
