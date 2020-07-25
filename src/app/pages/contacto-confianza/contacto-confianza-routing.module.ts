import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoConfianzaPage } from './contacto-confianza.page';

const routes: Routes = [
  {
    path: '',
    component: ContactoConfianzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoConfianzaPageRoutingModule {}
