import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  // bandera que le indicara al sidbar si se puede o no mostrar
  userLogged$ = new EventEmitter<boolean>();
  // Path base para realizar el POST al back y autenticar al usuario
  private BASE_PATH = 'https://ies-webcontent.com.mx/xccm/user/validarUsuario';
  constructor(private http:HttpClient, private router:Router) { }

  /* Autentica la usario con las credenciales como argumento en el endpoint BASE_PATH */
  userLogin(cred:any){    
    return this.http.post(this.BASE_PATH,cred);
  }

  /* finaliza la sesión del usuario */
  userlogout(){
    localStorage.removeItem('session');
    this.userLogged$.emit(false);
    this.router.navigateByUrl('');
  }

  /* Verifica si el usuario esta logeado en el sistema */
  isUserLoggedIn(){
    const item = localStorage.getItem('session');
    if(item){
      return true;
    }
    else{
      return false;
    }
  }
}
