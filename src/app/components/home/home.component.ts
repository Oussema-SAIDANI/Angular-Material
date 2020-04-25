import { Component, OnInit } from '@angular/core';
import {productsList} from 'src/app/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nombre: number;
  products = productsList;
  constructor() { }
  ngOnInit() {
    this.nombre = 0;
  }
  addToCart() {
    this.nombre++;
  }

}
