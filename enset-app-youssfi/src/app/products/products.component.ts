import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private productService:ProductService) {
  }


  products : Array<any> = [];

  handleCheckProduct(product: any) {
   this.productService.checkProduct(product)
       .subscribe({
           next : updatedproduct =>{
               product.checked=!product.checked;
           }
       });
  }

  ngOnInit(): void {
    this.productService.getProducts()
        .subscribe({
          next: data => {
            this.products = data
          },
          error: err=>{
            console.log(err);
          }
        })
  }
}
