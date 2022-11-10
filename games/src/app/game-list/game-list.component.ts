import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(public GameSrv: GameService) { }

  addShowing: boolean = false;

  newTitle: string = "";
  newYear: number = 0;
  newConsole: boolean = false;


  ngOnInit(): void {
  }

  showAddForm(){
    this.addShowing = true;
  }

  add(){
    this.GameSrv.get().push({
      title: this.newTitle,
      year: this.newYear,
      console: this.newConsole
    });

    this.newTitle = "";
    this.newYear = 0;
    this.newConsole = false;
  }

  cancelAdd(){
    this.newTitle = "";
    this.newYear = 0;
    this.newConsole = false;

    this.addShowing = false;
  }

  deleteGame(whichGame: Game){
    for (let i = 0; i < this.GameSrv.get().length; i++){
      if (this.GameSrv.get()[i] == whichGame){
        this.GameSrv.get().splice(i,1);
        return;
      }
    }
  }


}
