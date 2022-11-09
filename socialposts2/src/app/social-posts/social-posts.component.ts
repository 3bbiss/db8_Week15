import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  ThePosts: Post[] = [
    {title: "t1", thought: "T1"}, {title: "t2", thought: "T2"}
  ];

  NewTitle: string = "";
  NewThought: string = "";

  addShowing: boolean = false;

  add(){
    this.ThePosts.push({
      title: this.NewTitle,
      thought: this.NewThought
    });

    this.NewTitle = "";
    this.NewThought = "";

    this.addShowing = false;

  }

  cancel(){
    this.NewTitle = "";
    this.NewThought = "";

    this.addShowing = false;
  }

  showAddForm(){
    this.addShowing = true;
  }

  removeItem(whichPost: Post){
    for (let i = 0; i < this.ThePosts.length; i++){
      if (this.ThePosts[i] == whichPost){
        this.ThePosts.splice(i, 1);
        return;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
