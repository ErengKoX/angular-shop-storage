import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Items} from '../Items'
import { ItemService } from '../item.service';
@Component({
  selector: 'app-shopui',
  templateUrl: './shopui.component.html',
  styleUrls: ['./shopui.component.scss']
})
export class ShopuiComponent implements OnInit {
 
  constructor(private ItemService : ItemService) { }
  
  
  /*getItems(): void {
    this.ItemService.getItems().subscribe(showitems2 => this.showitems = showitems2);
  }*/
  ngOnInit(){
    this.items= this.ItemService.getItems()
  }
  items = [
    /*{ name: 'Coffee', price: 150, sumUnit: 0 },
    { name: 'Tea', price: 140, sumUnit: 0 },
    { name: 'Water', price: 120, sumUnit: 0 },
    { name: 'Beer', price: 360, sumUnit: 0 }*/
  ]
  basket = []

  getSum() {
    let res = 0;
    this.basket.forEach(element => {
      res = res + (element.price * element.sumUnit);
    });
    return res;
  }
  
  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } 
    else {
      event.previousContainer.data[event.previousIndex].sumUnit = 0;
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
