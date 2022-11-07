import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular1';
	name: string = 'Sally';
	newCity: string = "";

	cities: string[] = [
		'Detroit',
		'Chicago',
		'New York',
		'Orlando',
		'Salt Lake City',
		'Deir Ames'
	];

	addCity() {
		// TO MODIFY our UI, we change the value of
		// our member variables
		// this.cities.push('Kyoto');
		this.cities.push(this.newCity);
		this.newCity = "";
	};
}
