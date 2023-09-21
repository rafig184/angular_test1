import { Component } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { CategoriesService } from '../services/categories/categories.service';
import { Product } from './models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public products: Product[]
  public tableHeaders: any[]
  public categories: any[]
  public productName: string
  public price: number
  public selectedCategory: string

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService) {
    this.products = []
    this.tableHeaders = []
    this.categories = []
    this.productName = ""
    this.price = 0
    this.selectedCategory = ""
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

  async addProducts() {
    const product: Product = {
      productName: this.productName,
      price: this.price,
      categoryName: this.selectedCategory
    };

    console.log(product);


    try {
      const result = await this.productsService.addProduct(product);
      this.productName = "";
      this.price = 0;
      this.selectedCategory = "";
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
