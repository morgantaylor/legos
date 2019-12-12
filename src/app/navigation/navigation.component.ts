import { Component, OnInit } from '@angular/core';
import { Item } from '../navigation/item';
import { BASEITEMS } from '../navigation/baseitems';
import { COMPONENTITEMS } from '../navigation/componentitems';
import { STARTINGITEMS } from '../navigation/startingitems';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  baseitems = BASEITEMS;
  componentitems = COMPONENTITEMS;
  startingitems = STARTINGITEMS;
  // accordionInput : string;
  // mobileNav : string;

  constructor() { }

  ngOnInit() {
  }

  // toggleAccordion(e){
  //   this.accordionInput = e.target.parentElement.parentElement.children[0];
  //   this.mobileNav = document.getElementById('mobile-nav');

  //   console.log(this.accordionInput);
  //   console.log(e.target.parentElement.parentElement.children[0]);

  //   // console.log(this.mobileNav);
  //   // console.log(document.getElementById('mobile-nav').checked);

  //   this.accordionInput.checked = false;
  //   // this.mobileNav = false;
  // }

}
