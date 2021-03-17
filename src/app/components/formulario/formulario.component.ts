import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  form:FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({});
    this.initForm();
    
  }

  ngOnInit(): void {
  }

  isValidForm(){
    return this.form.invalid;
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
