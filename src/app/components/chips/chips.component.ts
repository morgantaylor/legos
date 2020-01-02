import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  chips = [
    ['green', 'Hockey'],
    ['gray', 'Lacrosse'],
    ['red', 'Baseball'],
    ['blue', 'Football']
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
