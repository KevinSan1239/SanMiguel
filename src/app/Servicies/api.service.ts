import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

 constructor(public http: HttpClient) { }
 public url= "https://localhost:7232/api/"

   // servicio get //
   async getAll(Controller:string){
    var response:any
    await this.http.get(this.url+Controller).toPromise().then((res=>{
      response=res
    }
    )

    )
    return response;
  }

  // servicio getId //

  async getIDAll(Controller:string, id:number){
    var response:any
    await this.http.get(this.url+Controller+'/'+id).toPromise().then((res=>{
      response=res
    }
    )

    )
    return response;
  }


   // servicio post //

    async postAll(Controller:string, data:any){
    var response:any
    await this.http.post(this.url+Controller,data).toPromise().then((res=>{
      response=res
    }
    )

    ) 
    return response;
  }


    // servicio put //

    async putAll(Controller:string, data:any, id:number ){
    var response:any
    await this.http.put(this.url+Controller+'/'+`${id}`,data).toPromise().then((res=>{
      response=res
    }
    )

    )
    return response;
  }


    //servicio delete //

    async deleteAll(Controller:string, id:number){
    var response:any
    await this.http.delete(this.url+Controller+'/'+id,{responseType:'text'}).toPromise().then((res=>{
      response=res
    }
    )
    

    )
    return response;
  }

}