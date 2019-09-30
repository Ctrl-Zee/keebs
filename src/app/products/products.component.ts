import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../models/mock-product-categories';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = PRODUCTS;

  constructor() { }

  ngOnInit() {
  }

}
