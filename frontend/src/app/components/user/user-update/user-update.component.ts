import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDomain } from '../user-model';
import { UsersService } from '../Users.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  usuarioDomain!:UsuarioDomain
  constructor(private userService:UsersService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.readById(id!).subscribe(usuarioDomainFromBack => {
      this.usuarioDomain = usuarioDomainFromBack;
    })
  }

  update(){
    this.userService.update(this.usuarioDomain).subscribe(() => {
      this.userService.showOnConsole('usuario atualizado')
      this.router.navigate(['/users'])
    })
  }

  cancel(){
    this.router.navigate(['/users'])
  }

}
