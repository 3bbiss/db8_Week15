import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() ThePost: Post = {
    title: "test",
    thought: "TEST"
  };

  @Output() remove: EventEmitter<Post> = new EventEmitter<Post>();

  delete(){
    this.remove.emit(this.ThePost);
  }
  

  edit(){
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
