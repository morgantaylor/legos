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
  accordionInput : object;
  mobileNav : object;

  constructor() { }

  ngOnInit() {
  }

  toggleAccordion(e){
    this.accordionInput = e.target.parentElement.parentElement.children[0];
    this.mobileNav = document.getElementById('mobile-nav');

    this.accordionInput.checked = false;
    this.mobileNav.checked = false;
  }

}
