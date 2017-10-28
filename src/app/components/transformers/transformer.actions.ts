import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../redux';
import { 
  FILTER_TRANSFORMERS,
  REQUEST_TRANSFORMERS_SUCCESS, 
  POST_TRANSFORMER_SUCCESS, 
  DELETE_TRANSFORMER_SUCCESS,
} from '../../redux/actions';
import { DataService } from '../../services/data.service';

@Injectable()
export class TransformerActions {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private dataService: DataService
  ) { }

  getTransformers() {
    this.dataService.getTransformers()
    .subscribe(transformers => {
      this.ngRedux.dispatch({
        type: REQUEST_TRANSFORMERS_SUCCESS,
        transformers,
      });
    });
  }

  postTransformer(t) {
    this.dataService.postTransformer(t)
    .subscribe(transformer => {
      this.ngRedux.dispatch({
        type: POST_TRANSFORMER_SUCCESS,
        transformer,
      });
    });
  }

  deleteTransformer(id) {
    this.dataService.deleteTransformer(id)
    .subscribe(transformer => {
      this.ngRedux.dispatch({
        type: DELETE_TRANSFORMER_SUCCESS,
        id,
      });
    });
  }

  filterTransformers(searchText: string) {
    this.ngRedux.dispatch({ 
      type: FILTER_TRANSFORMERS,
      searchText,
    });
  }

}