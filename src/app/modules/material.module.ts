import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

let material_components = [
    MatToolbarModule,
    MatButtonModule,
    MatButtonModule,
    MatSliderModule,
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
