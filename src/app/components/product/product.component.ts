import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productList: ProductInterface[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (result) => {
        this.productList = result.products;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
