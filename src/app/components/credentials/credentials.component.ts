import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {
  /* Formulario de grupo */
  form:FormGroup;
  /* variable para mostrar o no la contraseña */
  hide = true;

  constructor(
    private router:Router,
    private credeService:CredentialsService,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({});
    this.initForm();
  }

  ngOnInit(): void {
  }

  /* Autentica al usuario segun el response del service */
  login(){
    /* Credernciales a mandar al server */
    const cred_user = {
      "usuario":this.form.get('username')?.value,
      "contrasena":this.form.get('password')?.value
    }
    /* Subscripción al servicio */
    this.credeService.userLogin(cred_user).subscribe(
      (res:any)=>{
        /* si hubo respuesta del server */
        if(res.resultado){
          /* Si el rol es el autorizado */
          if(res.resultado.desc_rol === this.credeService.ROL_AUTH){
            // guardamos un elemento hasheado en el sotorage para simular una sesión
            localStorage.setItem('session',this.credeService.gethashRol());
            //activamos la bandera para mostra el sidebar
            this.credeService.userLogged$.emit(true); 
            // redireccionamos al dashboard
            this.router.navigateByUrl('auth');
          }else{
            this.openSnackBar("Acceso no autorizado", "Rol");        
          }
        }else{
          /* Credenciales incorrectas */
          this.openSnackBar("Credenciales incorrectas", "Autenticación");        
        }               
      },
      (err)=>{
        console.log(err);
        /* Hubo un error al realizar la peticion en el servicio */
        this.openSnackBar("Hubo un error al autenticar", "Error");        
      }
    )  
    
  }

  /* Muestra una alerta al usuario sobre el estado de la autenticacion */
  openSnackBar(message:string, action:string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  isValidForm(){
    return this.form.invalid;
  }

  initForm(){
    this.form = this.fb.group({
    username:['',[
        Validators.required,              
      ],      
    ],
    password:['',[
      Validators.required,             
      ],      
    ],
    })
  }

}
