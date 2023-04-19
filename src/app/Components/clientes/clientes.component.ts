import { Component,ViewChild,AfterViewInit,OnInit, ElementRef } from '@angular/core'; //esto
import { ApiService } from 'src/app/Servicies/api.service';
import { clientes } from '../../Models/Clientes';
import { MatPaginator } from '@angular/material/paginator';//esto
import { MatSort } from '@angular/material/sort';//esto
import { MatTable } from '@angular/material/table'; //esto
import {MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent implements AfterViewInit,OnInit {//esto


  public data:any=[]; //esto es el objeto
  public dataFinal:any=[]; //esto
  public setCliente:string=''; //esto
  public setColumns:string[]=[]; //esto
  public isNull:boolean; //esto
  public displayedColumns:string []= [];//esto
 
  @ViewChild(MatSort) sort:MatSort; //esto
  @ViewChild(MatPaginator) paginator:MatPaginator; //esto


  /**Formulario para obtener datos. */
  public formModificar= new FormGroup({ 
      idCliente: new FormControl (0), 
      nombre: new FormControl (''), 
      apellidos: new FormControl (''), 
      correo: new FormControl (''), 
      rol: new FormControl (''),
      genero: new FormControl (''),
      ciudad: new FormControl (''),
      direccion: new FormControl (''),
      dni: new FormControl (''),
  })

  constructor(public api:ApiService,public clientes:clientes){ //esto
}


  ngOnInit(): void {
      this.setClientes(); //esto
}
  
  ngAfterViewInit(): void {  //esto
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

  public formdataGETUPDATE(objetcdata:any){
    this.updateclientes(objetcdata);   
    this.loadingTable();
  }

  public formdataGETPOST(objetcdata:any){
       console.log(objetcdata.value);
       this.clientes={
        nombre: objetcdata.value.nombre,
        Apellidos: objetcdata.value.apellidos,
        correo: objetcdata.value.correo,
        rol: 'Cliente',
        Genero: objetcdata.value.genero,
        documento: objetcdata.value.dni,
        Ciudad: objetcdata.value.ciudad,
        Direccion: objetcdata.value.direccion
      }
      this.loadingTable();
  };


  setClientes(){  //esto
  var response=this.api.getAll("Clientes")
  return response.then (data => this.getClientes(data))
  }

  updateclick(id:number){

    const rstFilter=this.data.filteredData.filter(((items:{dni:number;})=>items.dni==id));
    
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

  getIdentity(id:number){ //esto
  
    const Rstfilter=this.dataFinal.filter((items:{dni:number})=>items.dni==id);
    this.setCliente=Rstfilter[0].dni;
    
  }

  deleteClick(id:string){ 

    this.deleteclientes(parseInt(id));
    this.loadingTable();
    this.setCliente='';

  }

  getClientes(data:any){ //esto

      this.data=data;
      for(let index=0;index<this.data.length;++index){
       this.dataFinal.push({
        id:index+1,
        nombre:this.data[index].nombre,
        apellido:this.data[index].apellidos,
        correo:this.data[index].correo,
        rol:this.data[index].rol,
        gender:this.data[index].genero,
        dni:this.data[index].documento,
        city:this.data[index].ciudad,
        adress:this.data[index].direccion
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
  

  getfiltrerclientes(data:any){ // hasta aca 
  
    console.log(data);
  }

  // addclientes(){
  //   this.clientes={
  //     nombre: "Lian",
  //     apellidos: "Feliz",
  //     correo: "jf@outlook.com",
  //     rol: "cliente",
  //     genero: "masculino",
  //     documento: "123",
  //     ciudad: "bogota",
  //     direccion: "lucero",

  
  
  //   }
  //   var response=this.api.postAll("Clientes",this.clientes)
  //   console.log(response);
  // }

  updateclientes(dataFinal:any){
    this.clientes={
      idCliente: dataFinal.value.idCliente,
      nombre: dataFinal.value.nombre,
      Apellidos: dataFinal.value.apellidos,
      correo: dataFinal.value.correo,
      rol: dataFinal.value.rol,
      Genero: dataFinal.value.genero,
      documento: dataFinal.value.dni,
      Ciudad: dataFinal.value.ciudad,
      Direccion: dataFinal.value.direccion
    }
    var response=this.api.putAll("Clientes",this.clientes,this.clientes.idCliente)
    console.log(response);
  }

  deleteclientes(IdentityMain:number){
    var response=this.api.deleteAll("Clientes",IdentityMain);
    response.then (data => data);
   
   }

  setfiltreclientes(){
    var response=this.api.getIDAll("Clientes",6)
    response.then (data => this.getfiltrerclientes(data));
  }

  loadingTable(){
    setTimeout(() => {
      this.dataFinal=[]; 
      this.displayedColumns=[];
      this.setClientes();
    }, 150);
  } 


}


