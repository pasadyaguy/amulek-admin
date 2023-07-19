import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@core/modules/shared.module';
import { CallbackComponent } from './auth/callback/callback.component';
import { LoggedOffComponent } from './auth/logged-off/logged-off.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  imports: [PagesRoutingModule, CommonModule, SharedModule],
  declarations: [
    PagesComponent,
    HomeComponent,
    UnauthorizedComponent,
    LoggedOffComponent,
    CallbackComponent,
  ],
})
export class PagesModule {}
