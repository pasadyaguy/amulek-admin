import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `<app-header></app-header>
    <div class="body-content"><router-outlet></router-outlet></div>`,
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
