import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-shop-storage';
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