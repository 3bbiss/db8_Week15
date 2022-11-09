import { Injectable } from '@angular/core';
import { Pet } from './pet';

@Injectable({
	providedIn: 'root'
})
export class PetsService {
	TheList: Pet[] = [
		{name: "n1", species: "s1", born: 1},
		{name: "n2", species: "s2", born: 2}
	];

	constructor() { }

	get(): Pet[] {
		return this.TheList;
	}
}
