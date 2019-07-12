import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {

  @Input()
  pizza:Pizza;
  constructor(private service:PizzaService,private route:ActivatedRoute,private router:Router) {}


  ngOnInit() {}
  // updateOrder(orderId:any,price:any){
  //   this.service.updateOrder(orderId,price);
  }


