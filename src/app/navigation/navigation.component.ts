import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../navigation/item';
import { COREITEMS } from '../navigation/coreitems';
import { COMPONENTITEMS } from '../navigation/componentitems';
import { STARTINGITEMS } from '../navigation/startingitems';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  coreitems = COREITEMS;
  componentitems = COMPONENTITEMS;
  startingitems = STARTINGITEMS;

  @Input() isOpen: boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();
  newItem: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  addNewItem(value) {
    this.newItemEvent.emit(value);
  }
}
