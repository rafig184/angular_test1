import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string
  constructor() {
    this.url = "http://localhost:4100/"
  }


  getAllProducts(): Promise<any> {
    return axios.get(this.url + "products")
  }
}
