import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Store } from "../interfaces/store.interface";

/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  private apiUrl = environment.apiUrl+"/stores";
  constructor(private http:HttpClient) { }

  getStores():Observable<Store[]>{
    console.log(this.apiUrl);
    return this.http.get<Store[]>(this.apiUrl);

  }
}*/
@Injectable({
  providedIn:'root'
})

export class StoresService{
  constructor(private Http:HttpClient){}
  private apiUrl = environment.apiUrl+"/stores";
  getStores():Observable<Store[]>{
    console.log(this.apiUrl);
    return this.Http.get<Store[]>(this.apiUrl);
  }
}
