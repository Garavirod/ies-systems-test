import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { FormularioComponent } from './auth/components/formulario/formulario.component';
import { OneComponent } from './auth/components/one/one.component';
import { DasboardComponent } from './views/dasboard/dasboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'auth',
    canActivateChild:[AuthGuard],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {path:'', component:CredentialsComponent, canActivate:[AuthGuard]},   
  {path: '**', pathMatch: 'full', redirectTo: '' },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
