import { Component, OnInit } from '@angular/core';
import { Item } from '../navigation/item';
import { BASEITEMS } from '../navigation/baseitems';
import { COMPONENTITEMS } from '../navigation/componentitems';
import { INTRODUCTIONITEMS } from '../navigation/introitems';
import { STARTINGITEMS } from '../navigation/startingitems';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  baseitems = BASEITEMS;
  componentitems = COMPONENTITEMS;
  introitems = INTRODUCTIONITEMS;
  startingitems = STARTINGITEMS;

  constructor() { }

  ngOnInit() {
  }

}
