import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-city-detail',
	templateUrl: './city-detail.component.html',
	styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

	@Input() TheCity: City = {
		name: "Detroit",
		state: "MI",
		population: 1000000
	};

	@Output() remove: EventEmitter<City> = new EventEmitter<City>();

	editMode: boolean = false;
	changeName: string = "";
	changeState: string = "";
	changePop: number = 0;

	
	constructor() { }

	ngOnInit(): void {
	}

	edit(){
		// alert("Edit");
		this.changeName = this.TheCity.name;
		this.changeState = this.TheCity.state;
		this.changePop = this.TheCity.population;
		this.editMode = true;
	}

	delete(){
		this.remove.emit(this.TheCity);
	}

	saveChanges(){
		this.TheCity.name = this.changeName;
		this.TheCity.state = this.changeState;
		this.TheCity.population = this.changePop;
		this.editMode = false;
	}

	cancelChanges(){
		this.editMode = false;

	}


}
