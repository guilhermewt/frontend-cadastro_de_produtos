import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent }  from './components/products/product-create/product-create.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { DatatablesComponent } from './components/datatables/datatables.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductCrudComponent
  },
  {
    path:'products-create',
    component:ProductCreateComponent
  },
  {
    path:'products-update/:id',
    component:ProductUpdateComponent
  },
  {
    path:'products-delete/:id',
    component:ProductDeleteComponent
  },
  {
    path: 'users',
    component:UserCrudComponent
  },
  {
    path:'user-create',
    component:UserCreateComponent
  },
  {
    path:'user-read',
    component:UserReadComponent
  },
  {
    path:'user-update/:id',
    component:UserUpdateComponent
  },
  {
    path:'user-delete/:id',
    component:UserDeleteComponent
  },
  {
    path:'datatables',
    component:DatatablesComponent
  }
];

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
