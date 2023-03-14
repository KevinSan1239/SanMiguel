import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.css']
})
export class InventariosComponent implements OnInit {

  constructor(public api:ApiService){}
  
  ngOnInit(): void {
    var response=this.api.getAll("Inventarios")
    console.log(response);
  }

}
