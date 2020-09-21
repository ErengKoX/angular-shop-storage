import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ViewChild ,Input} from '@angular/core';
import { ButtonRendererComponent } from './storage/button.component';
import { Items } from './Items';
import { combineLatest } from 'rxjs';
import { Grid, GridOptions, GridApi } from 'ag-grid-community';
import {ItemService} from './item.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-shop-storage';
 
  ngOnInit() {

  }

  //router :Router
  constructor(private router: Router){}
  dis :boolean = false
  dis2 :boolean = true
  switchpage(){
    
    this.router.navigateByUrl('/shopui');
    this.dis = true
    this.dis2=false
    
  }
  switchpage2(){
    this.router.navigateByUrl('/storage');
    this.dis2 =true
    this.dis = false
  }
}