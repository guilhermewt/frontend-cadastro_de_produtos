import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuarioDomain } from './user-model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private toastr: ToastrService) { }

  baseUrl = "http://localhost:3001/users";

  showOnConsole(msg:string){
    console.log(msg);
  }

  create(usuario:UsuarioDomain):Observable<UsuarioDomain>{
    return this.http.post<UsuarioDomain>(this.baseUrl,usuario).pipe(
      map(retorno => retorno),
      catchError(error => this.errorHandler(error))
    );
  }

  read():Observable<UsuarioDomain[]>{
    return this.http.get<UsuarioDomain[]>(this.baseUrl).pipe(
      map(retorno => retorno),
      catchError(error => this.errorHandler(error))
    )
  }

  readById(id:string):Observable<UsuarioDomain>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UsuarioDomain>(url).pipe(
      map(retorno => retorno),
      catchError(error => this.errorHandler(error))
    );
  }

  update(usuarioDomain:UsuarioDomain): Observable<UsuarioDomain>{
    const url = `${this.baseUrl}/${usuarioDomain.id}`;
    return this.http.put<UsuarioDomain>(url,usuarioDomain).pipe(
      map(retorno => retorno),
      catchError(error => this.errorHandler(error))
    )
  }

  delete(usuarioDomain:UsuarioDomain):Observable<UsuarioDomain>{
    const url = `${this.baseUrl}/${usuarioDomain.id}`;
    return this.http.delete<UsuarioDomain>(url).pipe(
      map(retorno => retorno),
      catchError(error => this.errorHandler(error))
    );
  }
 //closebut..botao fechar
  exibirMensagem(titulo:string,mensagem:string,tipo:string){
    this.toastr.show(mensagem,titulo,{closeButton:true, progressBar:true},tipo)
    
  }

  errorHandler(e:any): Observable<any>{
    this.exibirMensagem('Error!', 'nao foi possivel realizar a operacao', 'toast-error')
    return EMPTY;
  }
}