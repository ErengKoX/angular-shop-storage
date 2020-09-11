import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageComponent } from './storage/storage.component';
import { ShopuiComponent } from './shopui/shopui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonRendererComponent } from './storage/button.component';


@NgModule({
  declarations: [
    AppComponent,
    StorageComponent,
    ShopuiComponent,
    ButtonRendererComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    BrowserAnimationsModule,
    DragDropModule,FormsModule,ReactiveFormsModule, HttpClientModule,

  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
