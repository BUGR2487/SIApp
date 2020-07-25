import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarSeguridadPage } from './verificar-seguridad.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarSeguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarSeguridadPageRoutingModule {}
