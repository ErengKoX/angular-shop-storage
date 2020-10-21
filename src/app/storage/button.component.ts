
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {ItemService} from '../item.service'
import { Items } from '../Items';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="button" (click)="onClick($event)">{{label}}</button>
    `
})

//delete data 
export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;
  public gridApi
  checkdelete = 0 
  constructor(private ItemService : ItemService) {
  }
  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }
  
  onGridReady(params){
    this.gridApi = params.api;
    
  }
  _item:Items
  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data
      }
      this.params.onClick(params);

    }
    
  }
}
