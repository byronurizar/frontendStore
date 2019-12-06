import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

const urlBase = environment.urlBase;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NTY1NjAxMX0.Sjo4lIvYGwqZK8hWg8MtQUlKr7uSCZiWVAvqnwbs2tk'
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
  console.log("Ruta patch",ruta);
    return this.http.patch(urlBase+ruta,jsonSolicitud,httpOptions);
}

}