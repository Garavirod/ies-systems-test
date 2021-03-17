import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  emailAllowed( control: FormControl):{[s:string]:boolean}|null{
    //obtenmos email
    let email:string = control.value;        
    // verificamos si encuentra las subcadenas no permitidas en el email
    if(email.includes('gmail') || email.includes('hotmail')){            
      return {
        emailNotAllowed:true
      };
    } 
    return null;
  }
}
