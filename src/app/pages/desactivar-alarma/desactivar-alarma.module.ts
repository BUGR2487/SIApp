import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DesactivarAlarmaPageRoutingModule } from './desactivar-alarma-routing.module';
import { DesactivarAlarmaPage } from './desactivar-alarma.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesactivarAlarmaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DesactivarAlarmaPage]
})
export class DesactivarAlarmaPageModule {}
