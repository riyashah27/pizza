import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PizzaService } from 'src/app/pizza-app/pizza.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  angForm:FormGroup

  constructor(private fb:FormBuilder, private service:PizzaService) 
  { 
    this.createForm();
  }

  ngOnInit() {}

  createForm()
  {
    this.angForm=this.fb.group({
      orderId:['',Validators.required],
      orderName:['',Validators.required],
      price:['',Validators.required],
      orderType:['',Validators.required]
    });
  }

  addAdminPizza(orderId,orderName,price,orderType)
  {
    this.service.addAdminPizza(orderId,orderName,price,orderType);
  }


}
