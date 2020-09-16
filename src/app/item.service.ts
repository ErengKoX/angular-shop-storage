import { Injectable } from '@angular/core';
import { Items } from './Items';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
 
 
  //items:Items[]
  /*getItems(): Observable<Items[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(Item2);
  }*/

  private _items:Items[] = [];
 
  addItem(item: Items) {
        this._items.push(item);
  }
 
  getItems(): Items[] {
        return this._items;
  }
}

