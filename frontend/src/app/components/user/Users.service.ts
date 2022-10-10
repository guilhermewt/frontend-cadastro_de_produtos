import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDomain } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3001/users";

  showOnConsole(msg:string){
    console.log(msg);
  }

  create(usuario:UsuarioDomain):Observable<UsuarioDomain>{
    return this.http.post<UsuarioDomain>(this.baseUrl,usuario);
  }

  read():Observable<UsuarioDomain[]>{
    return this.http.get<UsuarioDomain[]>(this.baseUrl)
  }

  readById(id:string):Observable<UsuarioDomain>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UsuarioDomain>(url);
  }

  update(usuarioDomain:UsuarioDomain): Observable<UsuarioDomain>{
    const url = `${this.baseUrl}/${usuarioDomain.id}`;
    return this.http.put<UsuarioDomain>(url,usuarioDomain)
  }

  delete(usuarioDomain:UsuarioDomain):Observable<UsuarioDomain>{
    const url = `${this.baseUrl}/${usuarioDomain.id}`;
    return this.http.delete<UsuarioDomain>(url);
  }
}