import { Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { LayoutComponent } from '../@theme/components/layout/layout.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { LoggedOffComponent } from './auth/logged-off/logged-off.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        canActivate: [AutoLoginPartialRoutesGuard],
        data: { title: 'Home' },
        component: HomeComponent,
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin-routing').then((m) => m.ADMIN_ROUTES),
      },
      {
        path: 'callback',
        component: CallbackComponent,
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },
      {
        path: 'logged-off',
        component: LoggedOffComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];
