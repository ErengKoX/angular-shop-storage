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
  private _basket:Items[]=[]

  //additem&getitems รับส่งไปแสดงที่ UI
  addItem(item:Items,chek) {
    if(chek == false){
      this._items.push(item)
      
    }
    
    if(chek == true) {
      this._items.splice(item.no-1,1,item) 
    }
  }
  
  getItems(): Items[] {
        return this._items;
  }
  delete(item:Items,chek){
    if(chek = 1){
      this._items.splice(item.no-1,1)
    }
  }
  //additem2&getitems2 รับส่งไปแสดงที่ grid
  addItem2(item:Items,chek){
    if(chek == false){
      this._items2.push(item)
     
    }
    
    if(chek == true) {
      this._items2.splice(item.no-1,1,item)
     
    }
   
   }
  getItems2(): Items[] {
    return this._items2;
  }
  delete2(item:Items,chek){
    console.log(chek)
    if(chek = 1){
      this._items2.splice(item.no-1,1)
    }

  }
  //รับเข้า basket
  addBasket(item:Items){
    this._basket.push(item)
   }
  getBasket(): Items[] {
    return this._basket;
  }
}

