import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class ContactosService {

  constructor( private http: HttpClient ) { }

  getContactos() {
    return this.http.get(`${ URL }/contactos/`);
  }

}
