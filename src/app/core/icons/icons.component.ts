import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  popularIcons = [
    'bookmark',
    'check',
    'times',
    'clone',
    'eye',
    'flag',
    'cog',
    'info-circle',
    'pencil-alt',
    'plus-circle',
    'sync-alt',
    'search',
    'sort-down',
    'sort-up',
    'exclamation-triangle'
  ]

  sizeIcons = [
    'fa-lg',
    'fa-2x',
    'fa-3x',
    'fa-4x',
    'fa-5x'
  ]

  constructor() { }

  ngOnInit() {
  }

}
