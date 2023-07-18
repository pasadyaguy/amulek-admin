import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@core/modules/shared.module';
import { HomeComponent } from './home/home.component';
import { LoggedOffComponent } from './logged-off/logged-off.component';
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
  ],
})
export class PagesModule {}
