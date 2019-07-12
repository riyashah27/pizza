import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza-app/pizza.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private pizzaService:PizzaService) { }

  ngOnInit() {
    let orderId=this.route.snapshot.paramMap.get("orderId");
    this.deletePizza(orderId);
  }
  deletePizza(orderId)
  {
    this.pizzaService.deletePizza(orderId);
  }

}
