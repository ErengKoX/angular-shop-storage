import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageComponent } from './storage/storage.component';
import { ShopuiComponent } from './shopui/shopui.component';


@NgModule({
  declarations: [
    AppComponent,
    StorageComponent,
    ShopuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
