import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@core/modules/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [PagesRoutingModule, CommonModule, SharedModule],
  declarations: [PagesComponent],
})
export class PagesModule {}
