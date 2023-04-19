import { Component,AfterViewInit,OnInit,ViewChild } from '@angular/core';
import { facturas } from '../../Models/Facturas';
import { ApiService } from 'src/app/Servicies/api.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})


export class facturasComponent implements AfterViewInit,OnInit {

  public data:any=[]; //esto es el objeto
  public dataFinal:any=[]; //esto
  public setfacturas:string=''; //esto
  public setColumns:string[]=[]; //esto
  public isNull:boolean; //esto
  public displayedColumns:string []= [];//esto
 
  @ViewChild(MatSort) sort:MatSort; //esto
  @ViewChild(MatPaginator) paginator:MatPaginator; //esto

  constructor(public api:ApiService, public facturas:facturas){}
  
  ngOnInit(): void {
    this.setFacturas(); //esto
}

ngAfterViewInit(): void {  //esto
}


setFacturas(){  //esto
  var response=this.api.getAll("Facturas")
  return response.then (data => this.getFacturas(data))

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

getFacturas(data:any){ //esto

  this.data=data;
  for(let index=0;index<this.data.length;++index){
   this.dataFinal.push({
    id:index+1,
    Fecha:this.data[index].fecha,
    TotalFactura:this.data[index].totalFactura,
    Cantidad:this.data[index].cantidad,
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


}

getfiltrerfacturas(data:any){ // hasta aca 

  console.log(data);
  }

  getIdentity(id:number){ //esto
  
    const Rstfilter=this.dataFinal.filter((items:{id:number})=>items.id==id);
    this.setfacturas=Rstfilter[0].id;
     }

     deletefacturas(IdentityMain:number){
      var response=this.api.deleteAll("Facturas",IdentityMain);
      response.then (data => data);
     
     }
  
      deleteClick(id:string){ 
  
      this.deletefacturas(parseInt(id));
      this.loadingTable();
      this.setfacturas;
  
    }
  
    
    loadingTable(){
      setTimeout(() => {
        this.dataFinal=[]; 
        this.displayedColumns=[];
        this.setFacturas();
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