import { Component, OnInit } from '@angular/core';
import { personas } from 'src/app/Models/Personas';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent implements OnInit {
  constructor(public api:ApiService,public personas:personas){}
  data:any=[];  
  ngOnInit(): void {
    
    // this.addpersonas();
    this.updatepersonas();
    this.deletepersonas();
    this.setPersonas();
    this.setfiltrepersonas();
    
  }

  addpersonas(){

    this.personas={
      nombre: "",
      apellidos: "",
      rol: "",
      correo: "",
      genero: "",
      documento: "",
      ciudad: ""

    }
    var response=this.api.postAll("Personas",this.personas)
    console.log(response);
  }

  setPersonas(){
    var response=this.api.getAll("Personas")
    response.then (data => this.getPersonas(data));
  }

  getFiltrerpersonas(data:any){
    console.log(data);
  }

  getPersonas(data:any){
     this.data=data;
     console.log(this.data);
  }

  updatepersonas(){
    this.personas={
      idPersona: 2,
      nombre: "Camilo hp",
      apellidos: "Lozano",
      rol: "Cliente",
      correo: "jf@outlook.com",
      genero: "masculino",
      documento: "1234",
      ciudad: "bogota"

    }
    var response=this.api.putAll("Personas",this.personas,this.personas.idPersona)
    this.setPersonas();
    console.log(response);
    }

  deletepersonas(){

    var response = this.api.deleteAll("Personas",17)
    response.then (data => console.log(data)); 
    
  }

  setfiltrepersonas(){
    var response=this.api.getIDAll("Personas",1)
    response.then (data => this.getFiltrerpersonas(data));
  }


  }
