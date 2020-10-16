import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';
import { ButtonRendererComponent } from './button.component';
import { Items } from '../Items';
import {ItemService} from '../item.service'

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;
  name = 'Angular 10';

  frameworkComponents: any;
  rowDataClicked1 = {};
  public gridApi
  public gridColumnApi


  // onSelectionChanged and getSelectedRow
  selected:any

  // row data
  addNo : any
  addName : any
  addPrice : any
  addQuantity : any


  // AddRow ( create data )
  no:any=0
  check:boolean =true

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  rowData = []
  ngOnInit() {
    this.rowData = this.ItemService.getItems2()
    //console.log(this.rowData)
  }

  constructor(private ItemService : ItemService) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    
  }

  public get Item():Items{
    return this._item;
  }

// กำหนด หัวข้อในตาราง
  columnDefs = [
    {headerName: 'No', field: 'no',width:70,resizable: false},
    {headerName: 'Name', field: 'name',width:150,resizable: false},
    {headerName: 'Price', field: 'price',width:100,resizable: false},
    {headerName: 'Quantity', field: 'quantity',width:150,resizable: false},
    {
      //สร้างปุ่ม ลบ ในตาราง โดยใช้ ข้อมูลจากไฟล์ button.component.ts
      headerName: 'Control',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onDelete.bind(this),
        label: 'Delete'
      }
    },
  ];

  //กำหนดให้ข้อมูลในตารางว่างเปล่า เพื่อที่จะ กด New เพื่อเพิ่มข้อมูล
  

  rowSelection='single'
  //gridOption = {
     /* getRowNodeId : function(data){
      return data.no
    }*/
  //}

  checkselect = false
  itemupdate = []
  onSelectionChanged(event){

    this.selected = this.gridApi.getSelectedRows()
    this.selected = this.selected.length === 1 ? this.selected[0] : '';

    this.checkselect = true
    this._item = this.selected
    
  }

//กำหนด ปุ่ม register ให้สามารถ เพิ่ม หรือ แก้ไข ข้อมูลในตาราง ag-grid
  _item:Items
  numcheck:number
  register(){
    
    /*this.addNo = this.selected.no
    this.addName = this.selected.name
    this.addPrice = this.selected.price
    this.addQuantity = this.selected.quantity*/
    if (this.checkselect == true) {
      /*var rowNode = this.gridApi.getRowNode(this._item.no-1)
      var newData = {
        no:this.addNo,
        name:this.addName,
        price:this.addPrice,
        quantity:this.addQuantity,
      }*/
      //rowNode.updateData(newData)
      var rowNode = this.gridApi.getRowNode(this._item.no-1)
      var data = rowNode.data
      data.no = this._item.no
      data.name = this._item.name
      data.price = this._item.price
      data.quantity = this._item.quantity
      this.agGrid.api.updateRowData({
        update: [{ no: this._item.no, name: this._item.name, price: this._item.price ,quantity:this._item.quantity}]
      })
      this.ItemService.addItem2(data,this.checkselect);
      this.ItemService.addItem(data,this.checkselect);
      
    }

    if(this.check == false){
      this.agGrid.api.updateRowData({
        add: [{ no: this._item.no, name: this._item.name, price: this._item.price ,quantity:this._item.quantity}]
      })
      this.check =true
      
    }
   
    console.log(this.check)
    const currentItem:Items = {
      no:this._item.no,
      name:this._item.name,
      price:this._item.price,
      quantity:this._item.quantity,
      sumUnit:this._item.sumUnit
     }
    this.ItemService.addItem(currentItem,this.checkselect);
    this.ItemService.addItem2(currentItem,this.checkselect);
    this.checkselect = false
    
  }
 
  onAddRow() {
    if (this.rowData.length == this.no) {
      this.no=this.no+1
      console.log(this.no)
    }

    if (this.rowData.length != this.no) {
      this.no = this.rowData.length+1
      
    }
    
    this._item = {no:this.no,name:'',price:0,quantity:0,sumUnit:0}
    this.check= false
    console.log(this.check)
  }
  //กำหนดอีเว้น ของปุ่ม ลบ ที่อยู่ในตาราง โดยการคลิก row/ข้อมูล ที่อยู่ในตารางแล้วกด ปุ่ม Delete
  checkdelete = 0
  
  onDelete() {
    //this.rowDataClicked1 = e.rowData;
    this.checkdelete = 1
    var ro = this.gridApi.getRowNode(this._item.no-1)
    var selectedremove = ro.data
    console.log(selectedremove)
    this.ItemService.delete(selectedremove,this.checkdelete);
    this.ItemService.delete2(selectedremove,this.checkdelete);
    this.checkdelete = 0
    
  }
}
