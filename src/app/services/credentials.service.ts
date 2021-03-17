import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private BASE_PATH = 'https://ies-webcontent.com.mx/xccm/user/validarUsuario';
  constructor(private http:HttpClient) { }

  /* Autentica la usario con las credenciales como argumento en el endpoint BASE_PATH */
  userLogin(cred:any){    
    return this.http.post(this.BASE_PATH,cred);
  }

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
