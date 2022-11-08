import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

	Cities: City[] = [
		{name: "Grand Rapids", state: "MI", population: 20000},
		{name: "Lansing", state: "MI", population: 40000}
	];

	NewName: string = "";
	NewState: string = "";
	NewPopulation: number = 0;

	addShowing: boolean = false;

	add() {
		// alert('Add');
		this.Cities.push({
			name: this.NewName,
			state: this.NewState,
			population: this.NewPopulation
		});

		this.NewName = "";
		this.NewState = "";
		this.NewPopulation = 0;

		this.addShowing = false;

	}

	cancel(){
		// alert('Canc');
		this.NewName = "";
		this.NewState = "";
		this.NewPopulation = 0;

		this.addShowing = false;
	}

	showAddForm(){
		this.addShowing = true;
	}

	removeItem(whichCity: City){
		// alert(whichCity.name);
		// loop thru the list and look for whichCity
		// if we find it, we'll remove it
		// We need to use a traditional for-loop because we
		// need the index, so we can Splice(index, 1)

		for (let i = 0; i < this.Cities.length; i++){
			if (this.Cities[i] == whichCity){
				this.Cities.splice(i, 1);
				return; // Get out of the function altogether
			}
		}
	}

	constructor() { }

	ngOnInit(): void {
	}

}
