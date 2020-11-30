import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  URL = 'http://localhost:3000/api/'
  
  constructor(private http: HttpClient) { }

  agregarContacto(contacto){
    console.log(">>>>> enviando")
    console.log("dfdsf"+JSON.stringify(contacto));
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(contacto);
    return this.http.post(`${this.URL}contacto/agregar`,
    body,{'headers':headers , observe: 'response'})
  }

}
