// import { Component, ElementRef, Input, OnInit } from '@angular/core';
// import { Card } from '../models/card.model';

// @Component({
//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrls: ['./main.component.css']
// })
// export class MainComponent implements OnInit {

//   constructor() { }
//   // @Input("myimage") myimage!:ElementRef;
//    imagesArray:Card[] = [];
//   ngOnInit(): void {
//   }
//   addImage(name:HTMLInputElement, url:HTMLInputElement) {
//     // let imageUrl = url.value;
//     // let imageName = name.value;
//     console.log(name.value);
//     console.log(url.value);
//     this.imagesArray.push(new Card(name.value, url.value));
//     name.value = '';
//     url.value = '';
//   }
// }



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
 
  selectedTab:string = 'images';
 


  ngOnInit(): void {
    // setTimeout(() => this.name.nativeElement.value = "NUUUUU",3000);
  }

  

  
  selectTab(tab:string) {
    this.selectedTab = tab;
  }

}
