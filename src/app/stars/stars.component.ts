import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})

export class StarsComponent implements OnInit {

  likeCount= 0;
  isLiked = false;
  
  likeTheButton = () => {
    if(this.isLiked)
    this.likeCount--;
    else
    this.likeCount++;

    // this.isLiked = !this.isLiked
  }




 
  @Input() starsCounter = 5;
  @Input() volume = 0;
  mouseOverItemIndex = 0;
  @Output() onItemSelected=new EventEmitter<number>();
  constructor() { }
  @Input() card!:Card;
  ngOnInit(): void {
  }
  setLikes(likes: number) {
    this.onItemSelected.emit(likes);
  }
}





