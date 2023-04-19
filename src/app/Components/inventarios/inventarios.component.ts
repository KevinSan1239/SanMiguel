import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { invetarios } from 'src/app/Models/Inventarios';
import { ApiService } from 'src/app/Servicies/api.service';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.css']
})
export class InventariosComponent implements AfterViewInit,OnInit {

 
  public data:any=[]; //esto es el objeto
  public dataFinal:any=[]; //esto
  public setinventarios:string=''; //esto
  public setColumns:string[]=[]; //esto
  public isNull:boolean; //esto
  public displayedColumns:string []= [];//esto
 
  @ViewChild(MatSort) sort:MatSort; //esto
  @ViewChild(MatPaginator) paginator:MatPaginator; //esto

  constructor(public api:ApiService,public inventarios:invetarios ){}

  ngOnInit(): void {
    this.setInventarios(); //esto
}


ngAfterViewInit(): void {  //esto
}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.data.filter = filterValue.trim().toLowerCase();
}

setInventarios(){  //esto
var response=this.api.getAll("Inventarios")
return response.then (data => this.getInventarios(data))

}

public getOptionPagination(data:any){ //esto
this.data=new MatTableDataSource(this.data) //esto
this.data.sort=this.sort; //esto
this.data.paginator=this.paginator; //esto
}

getInventarios(data:any){ //esto

this.data=data;
for(let index=0;index<this.data.length;++index){
 this.dataFinal.push({
  id:index+1,
  FechaEntrada:this.data[index].fechaEntrada,
  FechaVencimiento:this.data[index].fechaVencimiento,
  Stock:this.data[index].stock,
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

getfiltrerInventarios(data:any){ // hasta aca 

console.log(data);
}

getIdentity(id:number){ //esto

const Rstfilter=this.dataFinal.filter((items:{id:number})=>items.id==id);
this.setinventarios=Rstfilter[0].id;

}

deleteInventarios(IdentityMain:number){
var response=this.api.deleteAll("Inventarios",IdentityMain);
response.then (data => data);

}

deleteClick(id:string){ 

this.deleteInventarios(parseInt(id));
this.loadingTable();
this.setinventarios;

}

loadingTable(){
setTimeout(() => {
this.dataFinal=[]; 
this.displayedColumns=[];
this.setInventarios();
}, 150);
} 

// updateclientes(dataFinal:any){
//   this.inventarios={
//     idDevolucion: dataFinal.value.id,
//     fecha: dataFinal.value.Fecha,
//     cantidad: dataFinal.value.Cantidad,
//     estado: dataFinal.value.Estado
//   }
//   var response=this.api.putAll("Devolucions",this.inventarios,this.inventarios.idDevolucion)
//   console.log(response);
// }

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



