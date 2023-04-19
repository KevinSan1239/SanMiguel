import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })


  export class facturas{
    idFactura?: number;
    fecha: string;
    totalfactura: number;
    cantidad: number;
    idCliente?: number;
  }