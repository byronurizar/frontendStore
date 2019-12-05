import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

const urlBase = environment.urlBase;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjYsImlhdCI6MTU3NTUwMDUyMX0.YTtTUDe_RUO0UZ3EE412gibI-IB-yqwir50hAsNFbHI'
  })
};

@Injectable()
export class ConectorApi{

constructor(private http:HttpClient){}


obtenerToken(){
  var json='{"email":"prueba3@gmail.com","password":"123456"}';
  var a=this.http.post(urlBase+"usuario/login",json,httpOptions);
  return a;
}

Post(ruta,jsonSolicitud){
    return this.http.post(urlBase+ruta,jsonSolicitud,httpOptions);
}

Get(ruta){
    return this.http.get(urlBase+ruta,httpOptions);
}

Patch(ruta,jsonSolicitud){
    return this.http.patch(urlBase+ruta,jsonSolicitud,httpOptions);
}

}