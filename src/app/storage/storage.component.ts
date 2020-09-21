import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';
import { ButtonRendererComponent } from './button.component';
import { Items } from '../Items';
import { combineLatest } from 'rxjs';
import { Grid, GridOptions, GridApi } from 'ag-grid-community';
import {ItemService} from '../item.service'

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent {
  @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;
  name = 'Angular 6';
  frameworkComponents: any;
  rowDataClicked1 = {};
  gridApi
  gridColumnApi
  
 
  ngOnInit() {
    //console.log(this.rowData)
    this.rowData = this.ItemService.getItems2()
    console.log(this.rowData.length)
  }

  constructor(private ItemService : ItemService) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }
  public get Item():Items{
    return this._item;
  }
     
  /*addItem(){
    const currentItem:Items = {
    no:this._item.no,
    name:this._item.name,
    price:this._item.price,
    quantity:this._item.quantity,
    sumUnit:this._item.sumUnit
    };
  this.ItemService.addItem(currentItem);
  }*/

  columnDefs = [
    {headerName: 'No', field: 'no',width:70,resizable: false},
    {headerName: 'Name', field: 'name',width:150,resizable: false},
    {headerName: 'Price', field: 'price',width:100,resizable: false},
    {headerName: 'Quantity', field: 'quantity',width:150,resizable: false},
    {
      headerName: 'Control',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onDelete.bind(this),
        label: 'Delete'
      }
    },
  ];
  
  rowData = []

  onDelete(e) {
    this.rowDataClicked1 = e.rowData;
    var selectedData = this.agGrid.api.getSelectedRows();
    this.agGrid.api.updateRowData({ remove: selectedData });
  }

  rowSelection='single'
  gridOption = {
      getRowNodeId : function(data){
      return data.no
    }
  }
  
  selected:any
  //show1 = new Items(this.addNo,this.addName,this.addPrice,this.addQuantity)
  show1 = new Items()
  show2:Items[]=[]
  show3:Items
  addNo : any
  addName : any
  addPrice : any
  addQuantity : any
 
  onSelectionChanged(){
    this.selected = this.gridApi.getSelectedRows()
    this.selected = this.selected.length === 1 ? this.selected[0] : '';

  }
  _item:Items
  register(){
    this.addNo = this._item.no
    this.addName = this._item.name  
    this.addPrice = this._item.price
    this.addQuantity = this._item.quantity
    if (this.check == true) {
      var rowNode = this.gridApi.getRowNode(this._item.no-1)
      var newData = {
        no:this.addNo,
        name:this.addName,
        price:this.addPrice,
        quantity:this.addQuantity,
      };
      //rowNode.updateData(newData)
    }
    
    if(this.check == false){
      this.agGrid.api.updateRowData({
        add: [{ no: this.addNo, name: this.addName, price: this.addPrice ,quantity:this.addQuantity}]
      })
      this.check =true
    }
    const currentItem:Items = {
            no:this._item.no,
            name:this._item.name,
            price:this._item.price,
            quantity:this._item.quantity,
            sumUnit:this._item.sumUnit
           };
    this.ItemService.addItem(currentItem);
    this.ItemService.addItem2(currentItem);
    
    console.log(this.rowData.length)
  }

  no:any=0
  check:boolean =true
  onAddRow() {
    
    if (this.rowData.length == this.no) {
      this.no=this.no+1
    } else {
     this.no++
    }
    if (this.rowData.length != this.no) {
      this.no = this.rowData.length+1
    } else { 

    }
    
    this._item = {no:this.no,name:'',price:0,quantity:0,sumUnit:0};
    this.check= false
    console.log(this.rowData.length)
    //this.selected= { no: [this.no], name:this.show1.name, price:this.show1.price,quantity:this.show1.quantity}

  }
  //onDeleteRow()
  //{
  //var selectedData = this.agGrid.api.getSelectedRows();
  //this.agGrid.api.updateRowData({ remove: selectedData });
  //}
  
  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridOption 
  }
}