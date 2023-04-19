import{Injectable} from "@angular/core"

    @Injectable({
        providedIn: 'root'
    })

export class productos{
    nombre: string;
    descripcion: string;
    cantidad: number;
    precioVenta: number;
    costo: number;
    tipoProducto: string;
    proovedor: string;

}