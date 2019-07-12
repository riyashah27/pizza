import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/pizza-app/pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza-app/pizza.service';

@Component({
  selector: 'app-admin-get',
  templateUrl: './admin-get.component.html',
  styleUrls: ['./admin-get.component.css']
})
export class AdminGetComponent implements OnInit 
{

  pizzas:Pizza[]=[];
  selectedPizza:Pizza;
  constructor(private route:ActivatedRoute, private service:PizzaService) { }

  ngOnInit()
   {
    this.service.getAdminOrders().subscribe(orderList=>this.pizzas=orderList);
  }

  onSelection(pizza:Pizza)
  {
    this.selectedPizza=pizza;
  }

}
