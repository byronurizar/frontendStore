import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { ApiRest } from '../modelos/apiResponse.model';
import { Observable } from 'rxjs/Observable';

const urlBase = environment.urlBase;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImlhdCI6MTU3NjI2ODUxNH0.2x7XwfrJvpSkm51LnwAj-AQfEfH6zrW0M_EcPaUhgY8'
  })
};

@Injectable()
export class ConectorApi{
resultado:Observable<any>;

constructor(private http:HttpClient){}


obtenerToken(){
  var json='{"email":"prueba3@gmail.com","password":"123456"}';
  var a=this.http.post(urlBase+"usuario/login",json,httpOptions);
  return a;
}

Post(ruta,jsonSolicitud){
    return this.http.post(urlBase+ruta,jsonSolicitud,httpOptions);
}

Get(ruta):Observable<any> {
    return this.resultado=this.http.get(urlBase+ruta,httpOptions);
}

Patch(ruta,jsonSolicitud){
  console.log("Ruta patch",ruta);
    return this.http.patch(urlBase+ruta,jsonSolicitud,httpOptions);
}

}