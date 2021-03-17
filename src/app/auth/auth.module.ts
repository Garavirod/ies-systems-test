import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { OneComponent } from './components/one/one.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from '../modules/material.module';
// formularos reactivos
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [OneComponent, FormularioComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
