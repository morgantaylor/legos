import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOpen: boolean = false;
  currentState: boolean = true;
  newItem: boolean;

  toggleNav(this) { 
    this.isOpen = !this.isOpen;
  }

  addItem(newItem: boolean) {
    this.isOpen = newItem;
  }
}
