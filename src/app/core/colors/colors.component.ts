import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  grayColors = [
    ['#333333', '$lego-gray-6'],
    ['#585858', '$lego-gray-5'],
    ['#7E7E7E', '$lego-gray-4'],
    ['#A3A3A3', '$lego-gray-3'],
    ['#C9C9C9', '$lego-gray-2'],
    ['#EEEEEE', '$lego-gray-1']
  ]

  actionColors = [
    ['#0083c6', '$lego-primary'],
    ['#5cb85c', '$lego-success'],
    ['#5bc0de', '$lego-info'],
    ['#fdae61', '$lego-warning'],
    ['#d53e4f', '$lego-danger']  ]

  constructor() { }

  ngOnInit() {
  }

}
