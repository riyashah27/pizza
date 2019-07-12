import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/pizza-app/pizza';
import { PizzaService } from 'src/app/pizza-app/pizza.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  @Input()
  pizza:Pizza;
  constructor(private service:PizzaService,private route:ActivatedRoute,private router:Router) {}


  ngOnInit() {}
  editAdminPizza(orderId:any,price:any){
    this.service.editAdminPizza(orderId,price);
  }

}
