import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {

  colors = [
    'blue',
    'green',
    'orange',
    'red',
    'gray'
  ]

  constructor() { }

  ngOnInit() {
  }

}
