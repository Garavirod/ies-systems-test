import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DasboardComponent } from './views/dasboard/dasboard.component';
import { OneComponent } from './components/one/one.component';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { FormularioComponent } from './components/formulario/formulario.component';
// formularos reactivos
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Peticones http module
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    OneComponent,
    CredentialsComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
