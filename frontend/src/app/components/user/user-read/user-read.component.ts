import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { UsuarioDomain } from '../user-model';
import { UsersService } from '../Users.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  usuarioDomain!:UsuarioDomain[]
  constructor(private usersService:UsersService,private router:Router, private headerService: HeaderService) {
    headerService.headerData = {
      title:'users',
      icon:'glyphicon-user',
      routerUrl:'users'
    }
   }

  ngOnInit(): void {
    this.usersService.read().subscribe(userDomain => {
      this.usuarioDomain = userDomain
    })
  }

}
