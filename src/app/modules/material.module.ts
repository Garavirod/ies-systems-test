import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
let material_components = [
    MatToolbarModule,
    MatButtonModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material_components    
  ],
  exports:[    
    ...material_components,
  ] 
})
export class MaterialModule { }
