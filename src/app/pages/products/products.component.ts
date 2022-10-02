import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shared/component/header/services/shopping-card.service';
import { Producto } from './interfaces/product.interface';

import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Producto[];
  constructor(
    private productSvc: ProductsService,
    private ShoppingCartSvc: ShoppingCartService    
    ) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap(res => this.products=res)
    )
    .subscribe();
  }
  AddCart(product: Producto):void{
    console.log("Add to card",product);
    this.ShoppingCartSvc.updateCart(product);
  }

}
