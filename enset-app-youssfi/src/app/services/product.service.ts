import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  public getProducts(){
    return this.http.get<Array<any>>("http://localhost:9000/products");
  }
  public checkProduct(product:any){
    return this.http.patch<any>(`http://localhost:9000/products/${product.id}`,{checked:!product.checked})
  }
}
