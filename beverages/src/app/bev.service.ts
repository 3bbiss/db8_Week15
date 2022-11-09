import { Injectable } from '@angular/core';
import { Beverage } from './beverage';

@Injectable({
	providedIn: 'root'
})
export class BevService {
	TheList: Beverage[] = [
		{name: "n1", alcohol: false, size: 20},
		{name: "n2", alcohol: true, size: 10}
	];

	// Add a getter function
	get(): Beverage[] {
		return this.TheList;
	}
	
	constructor() { }
}
