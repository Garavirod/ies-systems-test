import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {
  form:FormGroup;
  /* variable para mostrar o no la contraseña */
  hide = true;
  /* Variables para el mensaje del toast alert */
  private message = "No auotrizado";
  private action = "Autenticación";

  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({});
    this.initForm();
  }

  ngOnInit(): void {
  }

  login(){
    const cred_user = {
      "usuario":this.form.get('username')?.value,
      "contrasena":this.form.get('password')?.value
    }
    console.log(cred_user);    
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open(this.message, this.action, {
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
