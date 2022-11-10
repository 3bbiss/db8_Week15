import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  TheList: Game[] = [
    {title: "g1", year: 1, console: false},
    {title: "g2", year: 2, console: true}
  ];

  constructor() { }

  get(): Game[]{
    return this.TheList;
  }

}
