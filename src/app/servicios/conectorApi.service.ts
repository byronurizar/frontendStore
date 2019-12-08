import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { ApiRest } from '../modelos/apiResponse.model';
import { Observable } from 'rxjs/Observable';

const urlBase = environment.urlBase;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NTY4MjM1NX0.Ow1tkSevBC1lU1YO363AkkN9jlbVebLpx1ikkXWtfuQ'
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