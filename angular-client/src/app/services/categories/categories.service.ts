import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url: string
  constructor() {
    this.url = "http://localhost:4100/"
  }

  getAllCategories(): Promise<any> {
    return axios.get(this.url + "categories")
  }
}
