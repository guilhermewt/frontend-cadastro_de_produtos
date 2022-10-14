import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable,catchError,EMPTY} from 'rxjs';
import { map } from 'rxjs';
import { Product } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private http:HttpClient, private toast:ToastrService) { }

  showOnConsole(msg:string):void{
    console.log(msg);
  }

  exibirMensagem(mensagem:string,titulo:string,tipo:string){
    this.toast.show(mensagem,titulo,{closeButton:true,progressBar:true},tipo)
  }

  create(product:Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id:string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product:Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id:string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e:any): Observable<any>{
    this.exibirMensagem('ocorreu um error na operacao','error!','toast-error')
    return EMPTY
  }
  
}
