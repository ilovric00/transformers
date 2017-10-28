import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http:Http) {
  }

  getFactions() {
    return this.http.get('http://localhost:3000/factions')
      .map(res => res.json());
  }
  
  getVehicleTypes() {
    return this.http.get('http://localhost:3000/vehicleTypes')
      .map(res => res.json());
  }

  getTransformers() {
    return this.http.get('http://localhost:3000/transformers')
      .map(res => res.json());
  }

  getTransformer(id) {
    return this.http.get('http://localhost:3000/transformers/' + id)
      .map(res => res.json());
  }

  postTransformer(transformer) {
    return this.http.post('http://localhost:3000/transformers/', transformer)
      .map(res => res.json());    
  }

  deleteTransformer(id) {
    return this.http.delete('http://localhost:3000/transformers/' + id)
      .map(res => res.json());    
  }

}
