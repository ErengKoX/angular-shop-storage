import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageComponent } from './storage/storage.component';
import { ShopuiComponent } from './uishop.component';

const routes: Routes = [
  {path: 'shopui', component: ShopuiComponent},
  {path: 'storage', component: StorageComponent},
  {path: '',
    redirectTo:'/storage',
    pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
