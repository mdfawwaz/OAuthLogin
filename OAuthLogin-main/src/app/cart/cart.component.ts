import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any;
  Id: number=1;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    
    this.cartService.getCart().subscribe(res => this.cartItems = res); 
  }


  checkOut(): void {
    console.log("here");
    this.cartService.checkout().subscribe(res => this.cartItems=res);
  }

  generateBill(): number {
    if (!this.cartItems) {
      return 0; // Handle the case when cartItems is null or undefined
    }
  
    return this.cartItems.reduce((total: any, item: { total: any; }) => total + (item.total || 0), 0);
  }
  
}
