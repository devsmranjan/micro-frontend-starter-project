import { Component, Input, OnInit } from '@angular/core';
import { ProductDTO } from './models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: ProductDTO[];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts = () => {
    this._apiService.getProducts().subscribe((response) => {
      this.products = response;
    });
  };

}
