import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="http://localhost:8091/api/";

  constructor(private http:HttpClient) {
  }
  getAllEmployee(){
  return  (this.http.get(`${this.baseUrl}getAllEmp`));
  }

   getEmpById(id:any){
   return  (this.http.get(`${this.baseUrl}getParticularEmpById/${id}`));
   }

   getAllCountry(){
   return (this.http.get(`${this.baseUrl}getAllCountry`));
   }

   addEmpRecord(obj:any){
   return (this.http.post(`${this.baseUrl}addemp`,obj,{
      responseType:'text'
    }));
   }

   updateEmployee(obj:any){
  return  (this.http.put(`${this.baseUrl}updateEmployee/${obj.id}`,obj,{
      responseType:'text'
    }));
   }

   deleteEmployee(id:any){
    return  (this.http.delete(`${this.baseUrl}deleteEmployee/${id}`,{
      responseType:'text'
    }));
   }

}
