import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

//const apiKey = environment.apiKey;
const headers = new HttpHeaders({
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NTQ5NDg5NH0.R25SnjHApX5FA-9M0tdXoztXWyBx1S0deup7mamwbT0'
});

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3NTQ5NDg5NH0.R25SnjHApX5FA-9M0tdXoztXWyBx1S0deup7mamwbT0'
  })
};

@Injectable()
export class CategoriaService{
baseUrl=' http://127.0.0.1:3333/apiStore/v1/categorias/listar';


constructor(private http:HttpClient){}



  
categorias(){
  
    var a= this.http.get(this.baseUrl,{headers});
    return a;
}
obtenerToken(){
  var json='{"email":"prueba1@gmail.com","password":"123456"}';
  var a=this.http.post("http://127.0.0.1:3333/apiStore/v1/usuario/login",json,httpOptions);
  return a;
}
registrarCategoria(json){
  return this.http.post("http://127.0.0.1:3333/apiStore/v1/categorias/registro",json,httpOptions)
}

}