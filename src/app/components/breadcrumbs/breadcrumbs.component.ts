import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  colors = [
    'blue',
    'green',
    'red'
  ]

  constructor() { }

  ngOnInit() {
  }

}
