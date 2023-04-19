import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })

  export class invetarios{
    fechaEntrada: string;
    fechaVencimiento: string;
    stock: number;
    idProducto: number;
  }
