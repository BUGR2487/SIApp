import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesactivarAlarmaPage } from './desactivar-alarma.page';

const routes: Routes = [
  {
    path: '',
    component: DesactivarAlarmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesactivarAlarmaPageRoutingModule {}
