import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `<router-outlet></router-outlet>`,
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
