import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VerificarSeguridadPageRoutingModule } from './verificar-seguridad-routing.module';
import { VerificarSeguridadPage } from './verificar-seguridad.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarSeguridadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerificarSeguridadPage]
})
export class VerificarSeguridadPageModule {}
