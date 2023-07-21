import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../@theme/components/header/header.component';
import { SidebarComponent } from '../@theme/components/sidebar/sidebar.component';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: ``,
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
