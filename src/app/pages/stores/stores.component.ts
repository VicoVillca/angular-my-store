import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from './interfaces/store.interface';
import { StoresService } from './services/stores.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores!:Store[];
  constructor(private storeSvc:StoresService) { }

  ngOnInit(): void {
    this.storeSvc.getStores()
    .pipe(
      tap(res=>this.stores=res)
    ).subscribe();
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
/**
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
*/