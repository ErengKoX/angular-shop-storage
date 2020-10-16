import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageComponent } from './storage/storage.component';
import { ShopuiComponent } from './shopui/shopui.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '',component:StorageComponent,pathMatch:'full'},
  {path: 'storage', component: StorageComponent},
  {path: 'shopui', component: ShopuiComponent},
  {path: '**',component:StorageComponent}
  /*{path: '',
    redirectTo:'/storage',
    pathMatch:'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
