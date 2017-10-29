import { combineReducers } from 'redux';
import transformers from './transformers';
import { IAppState } from  '../IAppState';

let reducers = {
  transformers,
};

const rootReducer = combineReducers<IAppState>({
  transformers
});

export default rootReducer;