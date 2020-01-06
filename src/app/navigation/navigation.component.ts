import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() isOpen: boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  addNewItem(newItem: boolean) {
    this.newItemEvent.emit(newItem);
  }
}
