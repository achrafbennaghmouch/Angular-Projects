import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private http:HttpClient) {
  }


  products : Array<any> = [];

  handleCheckProduct(product: any) {
    product.checked=!product.checked
  }

  ngOnInit(): void {
  }
}
