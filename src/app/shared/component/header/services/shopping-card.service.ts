import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Producto } from "src/app/pages/products/interfaces/product.interface";
@Injectable({
    providedIn:'root'
})

export class ShoppingCartService{
    products:Producto[]=[];

    private carSubject = new Subject<Producto[]>();
    private totalSubject = new Subject<number>();
    private quantitySubject = new Subject<number>();

    get totalAction$(): Observable<number>{
        return this.totalSubject.asObservable();
    }

    get quantityAction$(): Observable<number>{
        return this.quantitySubject.asObservable();
    }

    get cardAction$(): Observable<Producto[]>{
        return this.carSubject.asObservable();
    }
    updateCart(producto:Producto):void{
        this.addToCard(producto);
        this.quantityProducts();
        this.calcTotal();
    }
    private addToCard(product:Producto):void{
        this.products.push(product);
        this.carSubject.next(this.products);
    }
    private quantityProducts():void{
        const quantity = this.products.length;
        this.quantitySubject.next(quantity);
    }
    private calcTotal():void{
        const total = this.products.reduce((acc,prod)=>acc+=prod.price,0);
        this.totalSubject.next(total);
    }
}