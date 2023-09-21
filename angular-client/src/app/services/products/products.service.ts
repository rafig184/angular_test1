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

  async addProduct(product: object) {
    console.log(product);


    const result = await axios.post(`${this.url}/products/new-product`, product);
  }

}
