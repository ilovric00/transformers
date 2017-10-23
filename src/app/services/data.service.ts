import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http:Http) {
  }

  getTransformers() {
    return this.http.get('http://localhost:3000/transformers')
      .map(res => res.json());
  }

  getTransformer(id) {
    return this.http.get('http://localhost:3000/transformers/' + id)
      .map(res => res.json());
  }

}
