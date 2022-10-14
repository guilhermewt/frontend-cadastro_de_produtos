import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!:Product
  constructor(private productService: ProductService,private router:Router,private route:ActivatedRoute,private headerService:HeaderService) {
   headerService.headerData = {
    title:'deletar produto',
    icon:'glyphicon-trash',
    routerUrl:'product-delete'
   }

   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    })
  }

  delete(){
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.exibirMensagem('produto excluido com sucesso','successful','toast-success')
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
