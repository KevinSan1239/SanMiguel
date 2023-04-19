import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class clientes{
    idCliente?: number;
    nombre: string;
    Apellidos: string;
    correo: string;
    rol: string;
    Genero: string;
    documento: string;
    Ciudad: string;
    Direccion: string;

  }
