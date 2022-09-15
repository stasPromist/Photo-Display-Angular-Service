import { Injectable, Input } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  

  constructor() { }
  
  imagesArray:Card[] = [];

removeImageById(id:string) {
  this.imagesArray = this.imagesArray.filter(image => image.id!== id);

}
}

