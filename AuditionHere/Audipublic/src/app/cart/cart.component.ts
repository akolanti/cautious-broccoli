import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Array<object>=[];

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
  }
  onDelete(i)
  {
    this.cart=this.cart.splice(i, 1);
    this.ngOnInit();

  }
}
