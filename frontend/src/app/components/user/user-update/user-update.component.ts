import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { UsuarioDomain } from '../user-model';
import { UsersService } from '../Users.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  usuarioDomain!:UsuarioDomain
  constructor(private userService:UsersService,private router:Router,private route:ActivatedRoute, private headerService:HeaderService) { 
    headerService.headerData = {
      title:'update user',
      icon:'glyphicon-pencil',
      routerUrl:'user-update'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.readById(id!).subscribe(usuarioDomainFromBackend => {
      this.usuarioDomain = usuarioDomainFromBackend;
    })
  }

  update(){
    this.userService.update(this.usuarioDomain).subscribe(() => {
      this.userService.exibirMensagem('successful','usuario atualizado!','toast-success')
      this.router.navigate(['/users'])
    })
  }

  cancel(){
    this.router.navigate(['/users'])
  }

}
