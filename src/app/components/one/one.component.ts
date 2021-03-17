import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  array_1 = [ { value: 1 , name: 'CampoUno'}, { value: 2 , name: 'CampoDos'}, { value: 3 , name: 'CampoTres'}, { value: 4 , name: 'CampoCuatro'}, { value: 5 , name: 'CampoCinco'}, { value: 6 , name: 'CampoSeis'}, ];
  array_2 = [ { value: 21 , name: 'a'}, { value: 20 , name: 'b'}, { value: 19 , name: 'c'}, { value: 18 , name: 'd'}, { value: 17 , name: 'e'}, { value: 16 , name: 'f'}, ];
  constructor() { }

  ngOnInit(): void {
    this.refactoryData(this.array_2);
    //this.refactorInverso(this.refactoryData(this.array_1));
  }

  refactoryData(arr:any){
    let obj:any = {};
    for(let e of arr){
      obj[e.name] = e.value;
    }
    console.log(obj);
    return obj;    
  }

  refactorInverso(obj:any){
    let new_arr:Array<any> = [];

    for(const property in obj){
      new_arr.push({'name':property, 'value':obj[property]});
    }
    
    console.log(new_arr);
    return new_arr;            
  }

}
