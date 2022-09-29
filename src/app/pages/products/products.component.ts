import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Producto } from './interfaces/product.interface';

import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Producto[];
  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap(res => this.products=res)
    )
    .subscribe();
  }

}
