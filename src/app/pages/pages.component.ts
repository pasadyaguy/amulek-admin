import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../@theme/components/sidebar/sidebar.component';
import { HeaderComponent } from '../@theme/components/header/header.component';

@Component({
    selector: 'app-pages',
    styleUrls: ['./pages.component.scss'],
    template: `<app-header></app-header> <app-sidebar></app-sidebar>`,
    standalone: true,
    imports: [HeaderComponent, SidebarComponent],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
