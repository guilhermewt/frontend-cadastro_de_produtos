import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from '../../template/header/header-data.model';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
 
  product:Product = {
    name: '',
    price: null
  }

  constructor(private productService:ProductService,private router:Router,private headerService:HeaderService) {
    headerService.headerData = {
      title:'cadastrar produtos',
      icon:'glyphicon-plus',
      routerUrl:'product-create'
    }
   }

  ngOnInit(): void {
  }

  create():void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showOnConsole('produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
