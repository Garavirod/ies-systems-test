import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  API_PATH_BASE = 'https://api.first.org/data/v1/countries?region=africa&limit=10&pretty=true';
  constructor(private http:HttpClient) { }

  getPaisesAPI(){
    return this.http.get(this.API_PATH_BASE)
  }

}


