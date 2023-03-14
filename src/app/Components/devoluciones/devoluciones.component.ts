import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {

  constructor(public api:ApiService){}

  ngOnInit(): void {
    var response=this.api.getAll("Devoluciones")
    console.log(response);
  }

}
