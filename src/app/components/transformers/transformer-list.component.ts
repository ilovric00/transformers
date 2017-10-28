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

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private transformerActions: TransformerActions
  ) { }

  ngOnInit() {
    this.transformerActions.getTransformers();
  }

}
