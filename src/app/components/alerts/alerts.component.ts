import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alertColors = [
    'danger',
    'success',
    'primary',
    'warning'
  ]

  constructor() { }

  ngOnInit() {
  }

}
