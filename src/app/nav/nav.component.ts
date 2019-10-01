import { Component, OnInit } from '@angular/core';
import { Item } from '../nav/item';
import { BASEITEMS } from '../nav/baseitems';
import { COMPONENTITEMS } from '../nav/componentitems';
import { INTRODUCTIONITEMS } from '../nav/introitems';
import { STARTINGITEMS } from '../nav/startingitems';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  baseitems = BASEITEMS;
  componentitems = COMPONENTITEMS;
  introitems = INTRODUCTIONITEMS;
  startingitems = STARTINGITEMS;

  constructor() { }

  ngOnInit() {
  }

}
