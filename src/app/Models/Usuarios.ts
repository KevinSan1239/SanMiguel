import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class devoluciones{
    idDevolucion?: number;
    fecha: string;
    cantidad: number;
    estado: string;



}