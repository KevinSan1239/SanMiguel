import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Servicies/api.service';
import { devoluciones } from '../../Models/Devoluciones';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements AfterViewInit,OnInit{

  public data:any=[]; //esto es el objeto
  public dataFinal:any=[]; //esto
  public setdevoluciones:string=''; //esto
  public setColumns:string[]=[]; //esto
  public isNull:boolean; //esto
  public displayedColumns:string []= [];//esto
 
  @ViewChild(MatSort) sort:MatSort; //esto
  @ViewChild(MatPaginator) paginator:MatPaginator; //esto

  
  constructor(public api:ApiService,public devoluciones:devoluciones){ //esto
  }
  
  
    ngOnInit(): void {
        this.setDevoluciones(); //esto
  }
    
    ngAfterViewInit(): void {  //esto
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }
  
  setDevoluciones(){  //esto
    var response=this.api.getAll("Devolucions")
    return response.then (data => this.getDevoluciones(data))
    
    }

    public getOptionPagination(data:any){ //esto
      this.data=new MatTableDataSource(this.data) //esto
      this.data.sort=this.sort; //esto
      this.data.paginator=this.paginator; //esto
    }

    getDevoluciones(data:any){ //esto

      this.data=data;
      for(let index=0;index<this.data.length;++index){
       this.dataFinal.push({
        id:index+1,
        Fecha:this.data[index].fecha,
        Cantidad:this.data[index].cantidad,
        Estado:this.data[index].estado,
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

  getfiltrerdevoluciones(data:any){ // hasta aca 
  
    console.log(data);
  }
  
  getIdentity(id:number){ //esto
  
    const Rstfilter=this.dataFinal.filter((items:{id:number})=>items.id==id);
    this.setdevoluciones=Rstfilter[0].id;
    
  }

  deletedevoluciones(IdentityMain:number){
    var response=this.api.deleteAll("Devolucions",IdentityMain);
    response.then (data => data);
   
   }

  deleteClick(id:string){ 

    this.deletedevoluciones(parseInt(id));
    this.loadingTable();
    this.setdevoluciones;

  }

  loadingTable(){
    setTimeout(() => {
      this.dataFinal=[]; 
      this.displayedColumns=[];
      this.setDevoluciones();
    }, 150);
  } 

  updateclientes(dataFinal:any){
    this.devoluciones={
      idDevolucion: dataFinal.value.id,
      fecha: dataFinal.value.Fecha,
      cantidad: dataFinal.value.Cantidad,
      estado: dataFinal.value.Estado
    }
    var response=this.api.putAll("Devolucions",this.devoluciones,this.devoluciones.idDevolucion)
    console.log(response);
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