import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { UsuarioDomain } from '../user-model';
import { UsersService } from '../Users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  usuarioDomain!:UsuarioDomain
  constructor(private usersService:UsersService, private router:Router, private activedRouter:ActivatedRoute, private headerService:HeaderService) {
    headerService.headerData = {
      title:'delete user',
      icon:'glyphicon-trash',
      routerUrl:'user-delete'
    }
   }

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.paramMap.get('id');
    this.usersService.readById(id!).subscribe(usuarioDomain => {
      this.usuarioDomain = usuarioDomain;
    })
  }

  delete(){
    this.usersService.delete(this.usuarioDomain).subscribe(() => {
      this.usersService.exibirMensagem('successful','user excluido com sucesso!','toast-success')
      this.router.navigate(['/users'])
    })
  }

  cancel(){
    this.router.navigate(['/users'])
  }

}