import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../user-model';
import { UsersService } from '../Usuario.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  usuario:Usuario = {
    name:'',
    email:'',
    phone:null
  }
  constructor(private router:Router,private usersService:UsersService) { }

  ngOnInit(): void {
  }

  create(){
    this.usersService.create(this.usuario).subscribe(() => {
      this.usersService.showOnConsole('user criado')
      this.router.navigate(['/users'])
    })
  }

  cancel(){
    this.router.navigate(['/users'])
  }

}
