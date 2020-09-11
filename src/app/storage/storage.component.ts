import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';
import { ButtonRendererComponent } from './button.component';
import { Items } from '../Items';
import { combineLatest } from 'rxjs';
import { Grid, GridOptions, GridApi } from 'ag-grid-community';


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
  
 
  ngOnInit() {
    console.log(this.rowData)
  }

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
    /*{no: 1, name: "Tea", price: "150",quantity:"20 "},
    {no: 2, name: "Coffee", price: "140",quantity:"50 "},
    {no: 3, name: "Weed", price: "360",quantity:"10 "},
    {no: 4, name: "Calpis", price: "120",quantity:"15 "},
    {no: 5, name: "CowPiss", price: "999",quantity:"999 "}*/
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
  show1=new Items()
  show2:Items[]=[]
  addName : any
  addNo : any
  addPrice : any
  addQuantity : any
 
 
  onSelectionChanged(){
    
    this.selected = this.gridApi.getSelectedRows()
    this.selected = this.selected.length === 1 ? this.selected[0] : '';
    //console.log(this.selected)

  }
  
  register(){
      this.addName = this.selected.name
      this.addNo = this.selected.no
      this.addPrice = this.selected.price
      this.addQuantity = this.selected.quantity
    if (this.check == true) {
      var rowNode = this.gridApi.getRowNode(this.selected.no-1)
      var newData = {
        no:this.addNo,
        name:this.addName,
        price:this.addPrice,
        quantity:this.addQuantity,
      };
      rowNode.updateData(newData)
    }
    
    if(this.check == false){
      this.agGrid.api.updateRowData({
        add: [{ no: this.addNo, name: this.addName, price: this.addPrice ,quantity:this.addQuantity}]
      });
      this.check =true
    }
    
  }
  no:any=0
  addRow:any
  check:boolean =true
  onAddRow(event) {
    if (this.rowData.length== this.no) {
      this.no=this.no+1
    } else {
     this.no++
    }
    if (this.rowData.length != this.no) {
      this.no = ++this.rowData.length
    } else { 

    }
    
    if(event){
      this.selected = { no: [this.no], name:this.show1.name, price:this.show1.price,quantity:this.show1.quantity}
      this.check= false
    }
    /*this.agGrid.api.updateRowData({
      add: [{ no: [this.no], name: '', price: 0 ,quantity:0}]
    });*/
    
    
  }
  //onDeleteRow()
  //{
  //var selectedData = this.agGrid.api.getSelectedRows();
  //this.agGrid.api.updateRowData({ remove: selectedData });
  //}
  
  onGridReady(test){
    this.gridApi = test.api;
    this.gridColumnApi.columnApi;
    this.gridOption
    
  }
  
}