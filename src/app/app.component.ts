import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  	constructor() {
  		if (environment.staging) {
  			console.log('staging: ', environment.staging);
    		console.log('production: ', environment.production);
    	}
  	}

  	title = 'LegoCSS';
  	stagingFlag = environment.staging;
}
