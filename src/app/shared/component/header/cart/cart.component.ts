import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-card.service";

@Component({
    selector:'app-cart',
    template:`
    <ng-container *ngIf="{total: total$| async  ,quantity:quantity$ | async } as dataCart">
        <ng-container *ngIf="dataCart.total">
            <mat-icon>add_shopping_cart</mat-icon>
            {{dataCart.total | currency}}
            ({{dataCart.quantity}})
        </ng-container>
    </ng-container>

  `
})
export class CartComponent implements OnInit {

    quantity$ = this.shoppingCardSvc.quantityAction$;
    total$ = this.shoppingCardSvc.totalAction$;
    card$ = this.shoppingCardSvc.cardAction$;
    constructor(private shoppingCardSvc:ShoppingCartService) { }
  
    ngOnInit(): void {
    }
  
  }