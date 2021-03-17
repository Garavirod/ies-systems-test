import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { FormularioComponent } from './auth/components/formulario/formulario.component';
import { OneComponent } from './auth/components/one/one.component';
import { DasboardComponent } from './views/dasboard/dasboard.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {path:'', component:CredentialsComponent},   
  {path: '**', pathMatch: 'full', redirectTo: '' },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
