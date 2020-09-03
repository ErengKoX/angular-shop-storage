import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageComponent } from './storage/storage.component';
import { ShopuiComponent } from './shopui/shopui.component';

const routes: Routes = [
  {path: 'shopui', component: ShopuiComponent},
  {path: 'storage', component: StorageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
