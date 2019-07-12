import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaAddComponent } from './pizza-app/pizza-add/pizza-add.component';
import { PizzaEditComponent } from './pizza-app/pizza-edit/pizza-edit.component';
import { PizzaDeleteComponent } from './pizza-app/pizza-delete/pizza-delete.component';
import { PizzaGetComponent } from './pizza-app/pizza-get/pizza-get.component';
import { AdminGetComponent } from './admin/admin-get/admin-get.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';

const routes: Routes = [
  {path:'pizza', component:PizzaGetComponent},
  {path:'cart',component:PizzaAddComponent},
  {path:'cart/delete',component:PizzaDeleteComponent},
  {path:'admin/pizza', component:AdminGetComponent},
  {path:'admin/addOrder', component:AdminAddComponent},
  {path:'admin/delete/:orderId', component:AdminDeleteComponent},
  {path:'pizza/edit/:orderId',component:AdminEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
