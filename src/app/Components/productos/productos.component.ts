import { Component, ViewChild,AfterViewInit,OnInit, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { productos } from 'src/app/Models/Productos';
import { ApiService } from 'src/app/Servicies/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements AfterViewInit,OnInit {

  public data:any=[]; //esto es el objeto
  public dataFinal:any=[]; //esto
  public setproductos:string=''; //esto
  public setColumns:string[]=[]; //esto
  public isNull:boolean; //esto
  public displayedColumns:string []= [];//esto
 
  @ViewChild(MatSort) sort:MatSort; //esto
  @ViewChild(MatPaginator) paginator:MatPaginator; //esto

  
  constructor(public api:ApiService,public productos:productos){ //esto
  }

  ngOnInit(): void {
    this.setProductos(); //esto
}

   ngAfterViewInit(): void {  //esto
}


   setProductos(){  //esto
   var response=this.api.getAll("Productoes")
   return response.then (data => this.getProductos(data))

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.data.filter = filterValue.trim().toLowerCase();
}

  public getOptionPagination(data:any){ //esto
  this.data=new MatTableDataSource(this.data) //esto
  this.data.sort=this.sort; //esto
  this.data.paginator=this.paginator; //esto
}
  getProductos(data:any){ //esto

  this.data=data;
  for(let index=0;index<this.data.length;++index){
   this.dataFinal.push({
    id:index+1,
    Nombre:this.data[index].nombre,
    Descripcion:this.data[index].descripcion,
    Cantidad:this.data[index].cantidad,
    PrecioVenta:this.data[index].precioVenta,
    Costo:this.data[index].costo,
    TipodeProducto:this.data[index].tipoProducto,
    Proveedor:this.data[index].proveedor,
   })
}

this.data=this.dataFinal;

if(this.data.length!=0){ // es para que no salga error en la consola cuando no tenga datos.
this.isNull=true;
this.setColumns=Object.keys(this.data[0]);
this.setColumns.forEach(column=>
this.displayedColumns.push(column)
 );
this.displayedColumns.push('Acciones');
}else{
this.isNull=false;
} 
this.getOptionPagination(data)


} // hasta aca 

getfiltrerproductos(data:any){ // hasta aca 

console.log(data);
}


  getIdentity(id:number){ //esto
  
    const Rstfilter=this.dataFinal.filter((items:{id:number})=>items.id==id);
    this.setproductos=Rstfilter[0].id;
    
  }

   deleteproductos(IdentityMain:number){
    var response=this.api.deleteAll("Productoes",IdentityMain);
    response.then (data => data);
   
   }

    deleteClick(id:string){ 

    this.deleteproductos(parseInt(id));
    this.loadingTable();
    this.setProductos;

  }

  
  loadingTable(){
    setTimeout(() => {
      this.dataFinal=[]; 
      this.displayedColumns=[];
      this.setProductos();
    }, 150);
  } 

  updateclick(id:number){

    const rstFilter=this.data.filteredData.filter(((items:{id:number;})=>items.id==id));
    
  //  this.formModificar=new FormGroup({
  //   idCliente: new FormControl (rstFilter[0].iterador), 
  //   nombre: new FormControl (rstFilter[0].nombre), 
  //   apellidos: new FormControl (rstFilter[0].apellido), 
  //   correo: new FormControl (rstFilter[0].correo), 
  //   rol: new FormControl (rstFilter[0].rol),
  //   genero: new FormControl (rstFilter[0].gender),
  //   ciudad: new FormControl (rstFilter[0].city),
  //   direccion: new FormControl (rstFilter[0].adress),
  //   dni: new FormControl (rstFilter[0].dni),

  //  })
  }



}
