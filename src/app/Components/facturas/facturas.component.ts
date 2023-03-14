import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})

export class FacturasComponent implements OnInit {
  
  constructor(public api:ApiService){}

  ngOnInit(): void {
    var response=this.api.getAll("Facturas")
    console.log(response);

    }

  }

