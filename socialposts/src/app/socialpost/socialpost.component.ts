import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-socialpost',
  templateUrl: './socialpost.component.html',
  styleUrls: ['./socialpost.component.css']
})
export class SocialpostComponent implements OnInit {
  @Input() ThePost: Post = {
    title: "",
    thought: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
