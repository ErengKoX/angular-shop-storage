import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,copyArrayItem} from '@angular/cdk/drag-drop';
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
  //items2 =[]
  basket =[]
  addbasket:Items
  Chart: any = []
  constructor(private ItemService : ItemService) { }
  //getitem = this.ItemService.getItems()
  name =[]
  price =[]
  price2 =[]
  max =[]
  sum =[]
  arreach=[]
  getall:number[] = []
  //sumUnit=0
  ngOnInit(){
    this.items = this.ItemService.getItems()
    this.Chart = new Chart('myChart', { // สร้าง object และใช้ชื่อ id lineChart ในการอ้างอิงเพื่อนำมาเเสดงผล
      type: 'pie',
      data: {
          labels: this.name, // ชื่อของข้อมูลในแนวแกน x
          datasets: [{ 
             label: 'Number of items',
             data: this.arreach,
             fill: false,
             lineTension: 0.2,
             //borderColor: "red", // สีของเส้น
             borderWidth: 1,
             backgroundColor: ['yellow','blue']
          }]
      },
      options: {
        title: {
          text: "List of Items",
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
  }
  getChart(){
   
  }
  getSum() {
    var res = 0;
    this.basket.forEach(element => {
      res = res + (element.price * element.sumUnit);
    })
    return res;
  }
  getarreach(d1,d2,d3){
    for (var index = 0; index < this.basket.length; index++) {
      //this.getall.push(this.arreach.indexOf(this.basket[index]))
    }
    console.log(d3)
   
    
  }
  getidx = []
  isPointerOverContainer:boolean
  
  drop(event:CdkDragDrop<any[]>) {
    
    var idx = event.container.data.indexOf(event.previousContainer.data[event.previousIndex]);
    if (idx != -1) {
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.isPointerOverContainer = event.isPointerOverContainer;
      console.log(555)
     
    } 
    else{
      event.previousContainer.data[event.previousIndex].sumUnit = 0;
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        this.basket.length)
      
      this.name.push(this.basket[event.currentIndex].name)
      this.price.push(this.basket[event.currentIndex].price)
      this.max.push(this.basket[event.currentIndex].quantity)
      this.arreach.push(this.basket[event.currentIndex].price*this.basket[event.currentIndex].quantity)
    }
   
    
    /*if(this.isPointerOverContainer == true){
    
    }*/
    
    this.getChart()
  }
 
}