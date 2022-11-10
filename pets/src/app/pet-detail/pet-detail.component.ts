import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Pet } from '../pet';

@Component({
	selector: 'app-pet-detail',
	templateUrl: './pet-detail.component.html',
	styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
	// This component will manage a single instance of pet.
	// So, we need an instance of pet.
		// For initial testing, we might want to fill
		// ThePet with some actual temporary data.

	// Three operations: View(R), Edit(U), Delete(D)
	// View(R)

	// Edit(U)

	// Delete(D)

		// To make it Editable, add a bool for editMode.
		// Make two sets of controls, one for view and
		// one for edit. Make them toggle-able.
		// Get the edit button working to switch to edit mode
		// Also include a button to switch to edit mode
		// and a button to delete (but don't code them yet).

	// Won't be a "Create" part of CRUD in this component

	@Input() ThePet: Pet = {
		name: "testName",
		species: "testSpecies",
		born: 1000
	};

	@Output() deleteEvent: EventEmitter<Pet> = new EventEmitter<Pet>();

	editMode: boolean = false;
	editName: string = "";
	editSpecies: string = "";
	editBorn: number = 0;

	constructor() { }

	ngOnInit(): void {
	}

	goToEditMode(){
		this.editMode = true;

		this.editName = this.ThePet.name;
		this.editSpecies = this.ThePet.species;
		this.editBorn = this.ThePet.born;
	}

	cancel(){
		this.editMode = false;
	}

	save(){
		//Two things: Save the edit boxes into the object
		// Go back to non-edit mode

		this.editMode = false;

		this.ThePet.name = this.editName;
		this.ThePet.species = this.editSpecies;
		this.ThePet.born = this.editBorn;
	}

	deleteMe(){
		this.deleteEvent.emit(this.ThePet);
	}

}
