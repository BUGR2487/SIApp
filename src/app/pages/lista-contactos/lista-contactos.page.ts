import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {

  constructor( private contactosService: ContactosService ) { }

  ngOnInit() {

    this.contactosService.getContactos().subscribe( resp => {
      console.log(resp);
    });

  }

}
