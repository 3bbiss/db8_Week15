import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
	selector: 'app-socialposts',
	templateUrl: './socialposts.component.html',
	styleUrls: ['./socialposts.component.css']
})
export class SocialpostsComponent implements OnInit {
	@Input() ThePosts: Post[] = [
		{
			title: "p1",
			thought: "t1"
		},
		{
			title: "p2",
			thought: "t2"
		},
		{
			title: "p3",
			thought: "t3"
		}
	];

	newPost: Post = {
		title: "",
		thought: ""
	  };

	formShowing: boolean = false;

	showForm(){
		// alert('hi');
		this.formShowing = true;
	}

	addPost(){
		let nextPost: Post = {... this.newPost};
		
		this.ThePosts.push(nextPost);
		this.newPost.title = "";
		this.newPost.thought = "";

		this.formShowing = false;
	}
	
	cancelAdd(){
		this.newPost.title = "";
		this.newPost.thought = "";
		this.formShowing = false;
	}

	constructor() { }

	ngOnInit(): void {
	}

}
