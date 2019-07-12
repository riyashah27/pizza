import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaAddComponent } from './pizza-app/pizza-add/pizza-add.component';
import { PizzaDeleteComponent } from './pizza-app/pizza-delete/pizza-delete.component';
import { PizzaEditComponent } from './pizza-app/pizza-edit/pizza-edit.component';
import { PizzaGetComponent } from './pizza-app/pizza-get/pizza-get.component';
import { TopBarComponent } from './pizza-app/top-bar/top-bar.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { AdminGetComponent } from './admin/admin-get/admin-get.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    PizzaAddComponent,
    PizzaDeleteComponent,
    PizzaEditComponent,
    PizzaGetComponent,
    TopBarComponent,
    AdminAddComponent,
    AdminDeleteComponent,
    AdminGetComponent,
    AdminEditComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }