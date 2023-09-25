import { Component } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { CategoriesService } from '../services/categories/categories.service';
import { Product } from './models';
import axios from 'axios';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public products: Product[]
  public tableHeaders: any[]
  public categories: any[]
  public productId: number
  public productName: string
  public price: number
  public selectedCategory: string
  public selectedCategoryID: number
  private url: string

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) {
    this.products = []
    this.tableHeaders = []
    this.categories = []
    this.productId = 0
    this.productName = ""
    this.price = 0
    this.selectedCategory = ""
    this.selectedCategoryID = 0
    this.url = "http://localhost:4100"
  }

  async ngOnInit(): Promise<void> {
    const result = await this.productsService.getAllProducts();
    console.log(result.data);

    this.products = result.data;
    console.log(this.products);
    const headers = Object.keys(this.products[0])
    this.tableHeaders = headers

    const categories = await this.categoriesService.getAllCategories();
    console.log(categories);
    this.categories = categories.data

  }

  async getProducts() {
    const result = await this.productsService.getAllProducts();
    console.log(result.data);
    this.products = result.data;
  }

  async addProducts() {
    const product: Product = {
      productName: this.productName,
      price: this.price,
      categoryName: this.selectedCategory
    };
    await this.productsService.addProduct(product)
    this.productName = "";
    this.price = 0;
    this.selectedCategory = "";

    await this.getProducts()
    // setTimeout(() => {
    // }, 2000);
  }

  async productToDelete(productId: any) {
    console.log(productId);
    const result = await this.productsService.deleteProduct(productId)
    this.getProducts()
  }

  async productToEdit(productId: number, productName: string, price: number, categoryID: number) {
    const product: Product = {
      idproducts: this.productId,
      productName: this.productName,
      price: this.price,
      categoryID: this.selectedCategoryID
    };
    const result = await this.productsService.editProduct(product)
  }

}
