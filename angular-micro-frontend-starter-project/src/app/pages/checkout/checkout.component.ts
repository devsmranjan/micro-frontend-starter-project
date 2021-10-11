import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ProductDTO } from '../products/models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  id!: string | null;
  product!: ProductDTO;

  totalItems: number = 1;

  constructor(private _apiService: ApiService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getProduct();
    }
  }

  getProduct = () => {
    this._apiService.getProductById(this.id).subscribe((response) => {
      this.product = response;
    }, (e) => console.log(e));
  };

  increaseItems = () => {
    this.totalItems += 1;
  };

  decreaseItems = () => {
    this.totalItems -= this.totalItems > 1 ? 1 : 0;
  };
}
