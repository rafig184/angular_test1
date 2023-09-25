import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string
  constructor() {
    this.url = "http://localhost:4100"
  }


  getAllProducts(): Promise<any> {
    return axios.get(this.url + "/products")
  }

  addProduct(product: object) {
    console.log(product);
    return axios.post(this.url + "/products/new-product", product, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  deleteProduct(productId: number): Promise<any> {
    return axios.delete(`${this.url}/products/delete-product/${productId}`)
  }

  editProduct(product: any) {
    return axios.put(`${this.url}/products/edit-product`, product)
  }

}
