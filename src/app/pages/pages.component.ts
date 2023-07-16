import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `<app-header></app-header> <app-sidebar></app-sidebar>`,
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
