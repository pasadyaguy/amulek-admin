import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [PagesRoutingModule, CommonModule],
  declarations: [PagesComponent],
})
export class PagesModule {}
