import { Component, OnInit, Input } from '@angular/core';
import { ProductDTO } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: ProductDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
