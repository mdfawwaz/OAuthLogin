import { Component } from '@angular/core';
import { Cycle } from '../Cycle';
import { CycleServiceService } from '../cycle-service.service';
import { CartItem } from '../CartItem';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cycle-shop',
  templateUrl: './cycle-shop.component.html',
  styleUrls: ['./cycle-shop.component.css']
})
export class CycleShopComponent {
  cycles: Cycle[] = [];
  cartItems: CartItem[]=[];
  count:number=1;
  name: string = "";
  stock: number = 1;
  price: number = 100;

  constructor(
    private cycleService: CycleServiceService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cycleService.getAllCycles().subscribe(res => this.cycles = res);
  }

  borrow(cycle: Cycle): void {
    this.cycleService.borrowCycle(cycle.id).subscribe(res => {
      this.cycles = res;
    });
  }

  returning(cycle: Cycle): void {
    this.cycleService.returnCycle(cycle.id).subscribe(res => this.cycles = res);
  }

  restock(cycle: Cycle): void {
    this.cycleService.restockCycle(cycle.id, this.count).subscribe(res => this.cycles = res);
  }

  add(name: string, stock: number, price: number): void {
    this.cycleService.addCycle(name, stock, price).subscribe(res => {
      this.cycles = res;
    });
  }

  addtoCart(cycle: Cycle): void {
   this.cartService.addToCart(cycle.id).subscribe();
  }

  

  
}
