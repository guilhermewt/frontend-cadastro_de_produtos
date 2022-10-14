import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { UsuarioDomain } from '../user-model';
import { UsersService } from '../Users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  usuario:UsuarioDomain = {
    name:'',
    email:'',
    phone:null
  }
  constructor(private router:Router,private usersService:UsersService, private headerService:HeaderService) {
    headerService.headerData = {
      title:'new users',
      icon:'glyphicon-user',
      routerUrl:'user-create'
    }
   }

  ngOnInit(): void {
  }

  create(){
    this.usersService.create(this.usuario).subscribe(() => {
      this.usersService.exibirMensagem('successful','users cadastrado com sucesso', 'toast-success')
      this.router.navigate(['/users'])
    })
  }

  cancel(){
    this.router.navigate(['/users'])
  }

}
