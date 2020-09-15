import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ContactoConfianzaPageRoutingModule } from './contacto-confianza-routing.module';
import { ContactoConfianzaPage } from './contacto-confianza.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactoConfianzaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContactoConfianzaPage]
})
export class ContactoConfianzaPageModule {}
