import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Producto } from "../interfaces/product.interface";

@Component({
    selector:'app-producto',
    templateUrl:'./producto.component.html',
    styleUrls:['./producto.component.css']
})

export class ProductoComponent implements OnInit{
    @Input() product!:Producto;
    @Output() addToCartClick= new EventEmitter<Producto>();
    constructor(){}

    ngOnInit(): void {
        
    }
    onClick():void{
        console.log("Hola mundo weee desde boton");
        this.addToCartClick.emit(this.product);
    }
}