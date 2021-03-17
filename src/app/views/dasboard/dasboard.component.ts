import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  showSideNav:boolean; // bandera que indica si se muestra o no el sidebar

  constructor(private cred:CredentialsService) { 
    /* Inicializamos la bandera segun el estado de autenticación */
    this.showSideNav = this.cred.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.cred.userLogged$.subscribe(
      res => {this.showSideNav = res}
    );
  }

  /* llama al servicoio pra finalizar la sesión de usuario */
  logout(){
    this.cred.userlogout();
  }

}
