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
}