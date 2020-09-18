import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Items} from '../Items'
import { ItemService } from '../item.service';
import {Chart} from 'node_modules/chart.js'
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-shopui',
  templateUrl: './shopui.component.html',
  styleUrls: ['./shopui.component.scss']
})
export class ShopuiComponent implements OnInit {
  items = []
  basket = []
  Chart: any = []
  constructor(private ItemService : ItemService) { }
  getitem = this.ItemService.getItems()
  data_name =[]
  data_price =[]
  ngOnInit(){
    this.items= this.ItemService.getItems()
    
    /*for (var index = 0; index < this.basket.length; index++) {
      this.data_name.push(this.basket[index].name)
      this.data_price.push(this.basket[index].price)
    }*/
  
  }
  /*sumUnit=0
  
  getChart(){
    
    //console.log(this.sumUnit)
    this.Chart = new Chart('myChart', { // สร้าง object และใช้ชื่อ id lineChart ในการอ้างอิงเพื่อนำมาเเสดงผล
      type: 'pie',
      data: {
          labels: this.data_name, // ชื่อของข้อมูลในแนวแกน x
          datasets: [{ 
             label: 'Number of items sold in months',
             data: this.data_price, 
             fill: false,
             lineTension: 0.2,
             //borderColor: "red", // สีของเส้น
             borderWidth: 1,
             backgroundColor: ['yellow','blue']
          }]
      },
      options: {
        /*title: {
          text: "Line Chart",
          display: true
       }
      },
      scales: { // แสดง scales ของแผนภูมิเริมที่ 0
         yAxes: [{
            ticks:{
               beginAtZero:true
            }
         }]
       }
   })
  }*/
  getSum() {
    var res = 0;
    this.basket.forEach(element => {
      res = res + (element.price * element.sumUnit);
     
    });
    return res;
    
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      
      event.previousContainer.data[event.previousIndex].sumUnit = 0;
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    //this.getChart()
  }
}
