import { Component } from '@angular/core';
import { City } from './city';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular2';

	newCity: City = {
		name: "",
		state: "",
		population: 0
	};

	formShowing: boolean = false;

	cities: City[] = [
		{
			name: 'Detroit',
			state: 'Michigan',
			population: 1000000
		},
		{
			name: "Grand Rapids",
			state: "Michigan",
			population: 150000
		},
		{
			name: "New York",
			state: "New York",
			population: 5000000
		}
	];

	addCity(){
		// alert("yooo");
		// let nextCity: City = {
		// 	name: this.newCity.name,
		// 	state: this.newCity.state,
		// 	population: this.newCity.population
		// };

		// shorthand for above commented out
		let nextCity: City = {... this.newCity};

		this.cities.push(nextCity);
		this.newCity.name = "";
		this.newCity.state = "";
		this.newCity.population = 0;

		this.formShowing = false;
	}

	showForm(){
		// alert("Show");
		this.formShowing = true;
	}

	cancelAdd(){
		this.newCity.name = "";
		this.newCity.state = "";
		this.newCity.population = 0;
		this.formShowing = false;
	}


}
