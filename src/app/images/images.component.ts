import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Card } from '../models/card.model';
import { ImagesService } from '../services/images.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private http: HttpClient, private imgServices: ImagesService) { }
  API_URL = '';
  // imagesArray = [];
  isButtonDisabled = true;
  imagesArray: Card[] = this.imgServices.imagesArray;
  selectedTab: string = 'images';
  @ViewChild('url') url!: ElementRef;
  @ViewChild('name') name!: ElementRef;


  formData = { url: this.API_URL, name: 'xample' }

  ngOnInit(): void {
    console.log("ngOnInit")
    console.log(this.url)

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    console.log(this.url)
  }

  addImage() {
    this.imgServices.imagesArray.push(new Card(this.formData.name, this.formData.url));
    this.formData.name = ''
    this.formData.url = ''

    console.log(this.formData);

  }
  onInput() {
    if (this.url.nativeElement.value.length >= 3 && this.name.nativeElement.value.length >= 3) {
      this.isButtonDisabled = false;
    }
    else {
      this.isButtonDisabled = true;
    }

  }

 

  addRandomImages() {
    this.http.get(this.formData.url).subscribe({

      next: (imagesArray: any) => {
        imagesArray.forEach((image: any) =>
          this.imgServices.imagesArray.push(new Card(image.author, image.download_url)))
          console.log(imagesArray);
        // this.formData.name = ''
        this.formData.url = ''
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')

    })
  }

  post() {
    const myHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://dummyjson.com/products/add', JSON.stringify({
      name: "this.formData.name",
      url: "this.formData.url",
      description: "Test"
    }), { headers: myHeaders }).subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}



