import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../redux';
import { ITransformer } from './ITransformer';
import { TransformerActions } from '../transformers/transformer.actions';

@Component({
  selector: 'app-transformer-list',
  templateUrl: './transformer-list.component.html',
  styleUrls: ['./transformer-list.component.scss']
})
export class TransformerListComponent implements OnInit {
  @select(['transformers', 'filteredTransformers']) filteredTransformers$: Observable<ITransformer[]>  
  field: string;
  headers = [
    { value: 'Name', sort: 'name', selected: true },
    { value: 'Vehicle Group', sort: 'vehicleGroup', selected: false },
    { value: 'Vehicle Type', sort: 'vehicleType', selected: false },
    { value: 'Vehicle Model', sort: 'vehicleModel', selected: false },
    { value: 'Gear', sort: 'gear', selected: false},
    { value: 'Status', sort: 'status', selected: false},
    { value: '', sort: '', selected: false},    
  ];

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private transformerActions: TransformerActions
  ) { }

  ngOnInit() {
    this.field = 'name';
    this.transformerActions.getTransformers();
  }

  sortByField(field) : void {
    this.field = field;
    this.headers.forEach(header => {
      header.sort === field ? header.selected = true : header.selected = false;
    })
  }

}
