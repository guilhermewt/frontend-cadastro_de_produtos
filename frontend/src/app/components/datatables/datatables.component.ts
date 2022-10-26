import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from './Person-model';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.css']
})
export class DatatablesComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  data:any


  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json'
      }
    };

   this.httpClient.get('https://dummy.restapiexample.com/api/v1/employees').subscribe((res:any) => {
    this.data = res.data;
    this.dtTrigger.next(res.data);
   })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
