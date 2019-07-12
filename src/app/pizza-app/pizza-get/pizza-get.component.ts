import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-get',
  templateUrl: './pizza-get.component.html',
  styleUrls: ['./pizza-get.component.css']
})
export class PizzaGetComponent implements OnInit {

  pizzas:Pizza[]=[];
  pizza:Pizza;
  constructor(private route:ActivatedRoute, private service:PizzaService) { }

  ngOnInit() {
    this.service.getOrders().subscribe(orderList=>this.pizzas=orderList);
  }
 addToCart(pizza)
 {
   window.alert("Your pizza has been added");
   this.service.addToCart(pizza);
 }
}
