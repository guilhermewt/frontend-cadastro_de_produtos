import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3001/users";

  showOnConsole(msg:string){
    console.log(msg);
  }

  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl,usuario);
  }
}
