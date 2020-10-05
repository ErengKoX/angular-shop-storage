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
  arreach:number[]=[]
  getall:number[] = []
  //sumUnit=0
  ngOnInit(){
    this.items = this.ItemService.getItems()
    
  }
  dynamicColors () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
 };
  getSum() {
    var res = 0;
    this.basket.forEach(element => {
      res = res + (element.price * element.sumUnit);
    })
    return res;
  }
  color =[]
  getarreach(d1,d2,d3){
    
    /*for (let index = 0; index < this.color.length; index++) {
      this.color[index] = (this.dynamicColors())
      
    }*/
    //this.getall.push(this.arreach.indexOf(this.basket[index]))
    
    this.arreach.splice(d3,1,d1*d2)
    console.log(this.arreach)

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
             backgroundColor: this.color
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
  getidx = []
  isPointerOverContainer:boolean
  
  drop(event:CdkDragDrop<any[]>) {
    
    var idx = event.container.data.indexOf(event.previousContainer.data[event.previousIndex]);
    if (idx != -1) {
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.isPointerOverContainer = event.isPointerOverContainer;
      console.log(this.isPointerOverContainer)
     
    } 
    else{
      event.previousContainer.data[event.previousIndex].sumUnit = 0;
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        this.basket.length)
      
        //console.log(this.dynamicColors())
        this.color.push(this.dynamicColors())
        //console.log(this.color)
      
     
    }
    
    if(this.isPointerOverContainer == false){
      this.basket.splice(event.previousIndex,1)
      console.log(this.basket)
    }
    
  }
  /*deleteitems =[]
  removeItem(event:CdkDragDrop<any[]>) {
    console.log(event)
  }*/
 
}