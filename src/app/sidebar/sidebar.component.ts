import { Component, OnInit } from '@angular/core';
import { Item } from '../sidebar/item';
import { BASEITEMS } from '../sidebar/baseitems';
import { COMPONENTITEMS } from '../sidebar/componentitems';
import { INTRODUCTIONITEMS } from '../sidebar/introitems';
import { STARTINGITEMS } from '../sidebar/startingitems';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  baseitems = BASEITEMS;
  componentitems = COMPONENTITEMS;
  introitems = INTRODUCTIONITEMS;
  startingitems = STARTINGITEMS;

  constructor() { }

  ngOnInit() {
  }

}
