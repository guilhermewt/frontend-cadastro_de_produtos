import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { HeaderService } from '../../template/header/header.service';
import { UsuarioDomain } from '../user-model';
import { UsersService } from '../Users.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit,OnDestroy {

  dtOptions:DataTables.Settings = {};
  dtTrigger: Subject<any> =  new Subject<any>();

  usuarioDomain!:UsuarioDomain[]
  constructor(private usersService:UsersService,private router:Router, private headerService: HeaderService) {
    headerService.headerData = {
      title:'users',
      icon:'glyphicon-user',
      routerUrl:'users'
    }
   }

  ngOnInit(): void {

  //  $("#hide").css({color:"#FFF", backgroundColor: "#000" });

  //  $("#show").click(function(){
  //   $("h1").show();
  //  });

  //  $(".dataTables_length").css({color: "#fff"})

  //  $(document).DataTable({
  //     $("#example_length").css({color: #fff;})
   
  // });

  // $("#example").dataTable().css({color:"#white"});


    
    this.usersService.read().subscribe(userDomain => {
      this.usuarioDomain = userDomain;
      this.dtTrigger.next(userDomain);
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
