import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { pipe } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { PaisesService } from 'src/app/services/paises.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  minDate = new Date();
  maxDate =  new Date();

  form:FormGroup;
  paises:Array<string>;

  constructor(private fb:FormBuilder, private psisesService:PaisesService) {

    this.paises = [];
    this.form = this.fb.group({});
    this.initForm();    
  }

  ngOnInit(): void {
    this.setDates();
    this.fillPaises();
  }

  /* Verifica si los campos del formulario son validos */
  isValidForm(){
    return this.form.invalid;
  }

  /* Dates */
  setDates(){
    let today = new Date();
    this.minDate.setMonth(today.getMonth() - 11);
    this.maxDate.setDate(today.getDate() + 1);
    
  }

  /* rellena el arreglo de paises que esl servico provee */
  fillPaises(){
    this.psisesService.getPaisesAPI()
    .pipe(      
      map((e:any) => (Object.values(e.data)))
    )    
    .subscribe(
      (res:any)=>{              
        let paises_filtered = res.map((e:any) => (e.country)); 
        this.paises = paises_filtered;       
        console.log(this.paises);         
      },
      (err)=>{
        console.log(err); 
      }
    )
  }

  initForm(){
    this.form = this.fb.group({
      name:['',[
        Validators.required,
        Validators.minLength(6),        
      ],      
    ],
    mail:['',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
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

  enviar(){
    console.log(this.form);
    
  }

}
