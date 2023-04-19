import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class personas{
    idPersona?: number;
    nombre: string;
    apellidos: string;
    rol: string;
    correo: string;
    genero: string;
    documento: string;
    ciudad: string;
  }