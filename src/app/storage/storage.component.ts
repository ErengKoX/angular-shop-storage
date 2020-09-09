import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';
import { ButtonRendererComponent } from './button.component';


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
  
  public gridApi
  public gridColumnApi

  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  columnDefs = [


    {headerName: 'No', field: 'no',width:70,resizable: false},
    {headerName: 'Name', field: 'name',width:150,resizable: false},
    {headerName: 'Price', field: 'price',width:100,resizable: false},
    {headerName: 'Quantity', field: 'quantity',width:150,resizable: false},
    {
      headerName: 'Control',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Delete'
      }
    },
  ];
  n:number =0
  rowData = [
    {no: this.n, name: "Tea", price: "150",quantity:"20 "},
    {no: 2, name: "Coffee", price: "140",quantity:"50 "},
    {no: 3, name: "Weed", price: "360",quantity:"10 "},
    {no: 4, name: "Calpis", price: "120",quantity:"15 "},
    {no: 5, name: "CowPiss", price: "999",quantity:"999 "}
  ]
  

  onBtnClick1(e) {
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
  addName : any
  addNo : any
  addPrice : any
  addQuantity : any
 
  
  onSelectionChanged(event){
  if(event)
  this.selected = this.gridApi.getSelectedRows();
  this.selected = this.selected.length === 1 ? this.selected[0] : '';
  
  }
  
  register(){
  this.addName = this.selected.name
  this.addNo = this.selected.no
  this.addPrice = this.selected.price
  this.addQuantity = this.selected.quantity
 
  
  var rowNode = this.gridApi.getRowNode(this.selected.no-1)
  var newData = {
      no:this.addNo,
      name:this.addName,
      price:this.addPrice,
      quantity:this.addQuantity,
 
  };
  
  rowNode.updateData(newData)
  
  }
  
  onAddRow() {
    
    this.agGrid.api.updateRowData({
      add: [{ no: [this.selected.no+1], name: '', price: 0 ,quantity:'' }]
   });
  }
  //onDeleteRow()
  //{
  //var selectedData = this.agGrid.api.getSelectedRows();
  //this.agGrid.api.updateRowData({ remove: selectedData });
  //}
  
  onGridReady(test){
  this.gridApi = test.api;
  this.gridColumnApi.columnApi;
  }
  }

