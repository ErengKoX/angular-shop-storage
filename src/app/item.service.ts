import { Injectable } from '@angular/core';
import { Items } from './Items';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
 
  no:number
  name:string
  price:number
  quantity:number
    
  private _items:Items[] = [];
  private _items2:Items[]=[]
  addItem(item: Items) {
    this._items.push(item);
  }
  getItems(): Items[] {
        return this._items;
  }
  addItem2(item:Items){
    this._items2.push(item)
   }
  getItems2(): Items[] {
    return this._items2;
}
}

