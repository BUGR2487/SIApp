import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarSeguridadPageRoutingModule } from './verificar-seguridad-routing.module';

import { VerificarSeguridadPage } from './verificar-seguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarSeguridadPageRoutingModule
  ],
  declarations: [VerificarSeguridadPage]
})
export class VerificarSeguridadPageModule {}
