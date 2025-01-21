import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  imports: [CommonModule, RouterModule],
})
export class ProductsListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  public products!: Product[];

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        next: products => {
          this.products = products;
          console.log(products);
        },
        error : e => console.log(e)
      });
  }
}
