import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() TheGame: Game = {
    title: "testTitle",
    year: 1000,
    console: true
  }

  @Output() deleteEvent: EventEmitter<Game> = new EventEmitter<Game>();

  editMode: boolean = false;
  editTitle: string = "";
  editYear: number = 0;
  editConsole: boolean = false;

  goToEdit(){
    this.editMode = true;

    this.editTitle = this.TheGame.title;
    this.editYear = this.TheGame.year;
    this.editConsole = this.TheGame.console;
  }

  cancelEdit(){
    this.editMode = false;
  }

  save(){
    this.editMode = false;

    this.TheGame.title = this.editTitle;
    this.TheGame.year = this.editYear;
    this.TheGame.console = this.editConsole;
  }

  deleteMe(){
    this.deleteEvent.emit(this.TheGame);
  }

}
