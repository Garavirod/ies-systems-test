import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  /*  Inputs  */
  // Para Ejercicio 1
  input_1 = [ { value: 1 , name: 'CampoUno'}, { value: 2 , name: 'CampoDos'}, { value: 3 , name: 'CampoTres'}, { value: 4 , name: 'CampoCuatro'}, { value: 5 , name: 'CampoCinco'}, { value: 6 , name: 'CampoSeis'}, ];
  //input_1 = [ { value: 21 , name: 'a'}, { value: 20 , name: 'b'}, { value: 19 , name: 'c'}, { value: 18 , name: 'd'}, { value: 17 , name: 'e'}, { value: 16 , name: 'f'}, ];
  // Para ejercico 2
  input_2:any = { CampoUno: 1, CampoDos: 2, CampoTres: 3, CampoCuatro: 4, CampoCinco: 5, CampoSeis: 6 };


  /* Outputs segun el ejercicio */
  output_1:any = {};
  output_2:Array<any> = [];

  constructor() { }

  ngOnInit(): void {}

  /* Ejecicio 1 */
  refactor(){
    // leemos array y de cada item reestructuramos pripedades y valores retornando un objeto    
    for(let e of this.input_1){
      this.output_1[e.name] = e.value;
    }
    console.log(this.output_1);
        
  }

  /*  Ejecicio 2 */
  refactorInverso(){
    // leemos objeto y solo obtenemos propiedades y valores    
    for(const property in this.input_2){
      this.output_2.push({'name':property, 'value':this.input_2[property]});
    }    
    console.log(this.output_2);   
  }

}
