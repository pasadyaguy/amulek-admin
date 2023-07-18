import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { AdminService } from 'src/app/@core/services/admin.service';
import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'settings',
        canActivate: [AutoLoginPartialRoutesGuard],
        data: { title: 'Settings' },
        component: SettingsComponent,
      },
      {
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminService],
})
export class AdminRoutingModule {}

export const routedComponents = [AdminComponent];
