import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { pipe } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { PaisesService } from 'src/app/services/paises.service';
import { ValidatorsService } from 'src/app/services/validators.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  // fecha mínima y máxima
  minDate = new Date();
  maxDate =  new Date();
  form:FormGroup; // formulario que hospeda los inputs
  paises:Array<string>; //colección de paises 

  constructor(
    private customValidator:ValidatorsService,
    private fb:FormBuilder, 
    private psisesService:PaisesService
    ) {
    this.paises = [];
    this.form = this.fb.group({});
    this.initForm(); // inicializa al fromulario con todos su campos y reglas
  }

  ngOnInit(): void {
    this.setDates(); // establece los rangos de fecha permitido
    this.fillPaises(); // usa el servicio para llenar la coleccion de paises
  }

  /* Verifica si los campos del formulario son validos */
  isValidForm(){
    return this.form.invalid;
  }

  /* Dates */
  setDates(){
    let today = new Date(); // fecah actual
    // La fecha mínima sera 11 meses atra a aprtri de la actual
    this.minDate.setMonth(today.getMonth() - 11);
    // la fecah maxima serla solo un dia mas a prtir de la fecha actual
    this.maxDate.setDate(today.getDate() + 1);
    
  }

  /* rellena el arreglo de paises que esl servico provee */
  fillPaises(){
    this.psisesService.getPaisesAPI()
    .pipe(
      //obtenemos solo los obj de los paises retronados      
      map((e:any) => (Object.values(e.data)))
    )    
    .subscribe(
      (res:any)=>{
        // de los obj retornado solo nos interesa el pais              
        let paises_filtered = res.map((e:any) => (e.country)); 
        this.paises = paises_filtered; // asignamso los paises a la colección       
        //console.log(this.paises);         
      },
      (err)=>{
        // error en el serivicio
        console.log(err); 
      }
    )
  }

  /* 
    Estructura un fromulario con sus respectivos campos y validaciones 
    nombre : name
    mail : correo
    pais,
    fecha
  */
  initForm(){
    this.form = this.fb.group({
      name:['',[
        Validators.required,
        Validators.minLength(6),        
      ],      
    ],
    mail:['',[
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
        this.customValidator.emailAllowed
      ]
    ],
    pais:['',[
      Validators.required,      
      ]
    ],
    fecha:['',[
      Validators.required,      
      ]
    ],
    })
  }

  /* simula el envio de la inrformación, solo la muestra en consola */
  enviar(){
    console.log(this.form.value);    
  }

}
