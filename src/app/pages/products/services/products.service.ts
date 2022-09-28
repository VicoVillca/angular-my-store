import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl=environment.apiUrl+"/products";
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Producto[]>{
    console.log(this.apiUrl);
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
