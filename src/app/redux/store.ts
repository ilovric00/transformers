import { createStore, GenericStoreEnhancer, compose } from 'redux';
import rootReducer from './reducers';
import { IAppState } from  './IAppState';

declare const window: any;
const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(rootReducer,
  compose(devToolsExtension) as GenericStoreEnhancer);
