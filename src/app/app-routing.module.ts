import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { OneComponent } from './components/one/one.component';
import { DasboardComponent } from './views/dasboard/dasboard.component';

const routes: Routes = [
  {path:'onecomponent', component:OneComponent},
  {path:'credentials', component:CredentialsComponent},
  {path:'formulario', component:FormularioComponent},
  {path: '', pathMatch: 'full', redirectTo: '' },
  {path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
