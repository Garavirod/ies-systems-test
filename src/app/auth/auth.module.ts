import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { OneComponent } from './components/one/one.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [OneComponent, FormularioComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
