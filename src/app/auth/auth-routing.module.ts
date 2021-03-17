import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { OneComponent } from './components/one/one.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'componenteuno', component:OneComponent},
      {path:'formulario', component:FormularioComponent},
      {path:'**', redirectTo:'formulario'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
