import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {
  pizzas;
  constructor( private service:PizzaService) {}

  ngOnInit() 
  {
    this.pizzas=this.service.getCartPizzas();
  }
}
