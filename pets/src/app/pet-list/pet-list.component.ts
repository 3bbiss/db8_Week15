import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';

@Component({
	selector: 'app-pet-list',
	templateUrl: './pet-list.component.html',
	styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

	/* TheList: Pet[] = [
		{name: "p1", species: "s1", born:1},
		{name: "p2", species: "s2", born:2}
	]; */

	// Angular will give us one instance of the pet list from the
	// PetsService.

	newName: string = "";
	newSpecies: string = "";
	newBorn: number = 0;

	add(){
		this.PetSrv.get().push({
			name: this.newName,
			species: this.newSpecies,
			born: this.newBorn
		});

		this.newName = "";
		this.newSpecies = "";
		this.newBorn = 0;
	}

	deletePet(whichPet: Pet){
		for (let i = 0; i < this.PetSrv.get().length; i++){
			if (this.PetSrv.get()[i] == whichPet){
				this.PetSrv.get().splice(i, 1);
				return;
			}
		}
	}


	constructor(public PetSrv: PetsService) { }

	ngOnInit(): void {
	}

}
