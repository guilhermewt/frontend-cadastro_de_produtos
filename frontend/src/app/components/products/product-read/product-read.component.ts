import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit ,OnDestroy{

  dtOptions:DataTables.Settings = {}

  dtTrigger: Subject<any> = new Subject<any>();
  product!:Product[]


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 9
    };

    this.productService.read().subscribe(product => {
      this.product = product;
      this.dtTrigger.next(product);
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
