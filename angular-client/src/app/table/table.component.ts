import { Component } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public products: any[]
  public tableHeaders: any[]

  constructor(private productService: ProductsService) {
    this.products = []
    this.tableHeaders = []
  }

  async ngOnInit(): Promise<void> {
    const result = await this.productService.getAllProducts();
    console.log(result.data);

    this.products = result.data;
    console.log(this.products);
    const headers = Object.keys(this.products[0])
    this.tableHeaders = headers
  }
}
