import { IAppState } from '../IAppState';
import { 
  REQUEST_TRANSFORMERS_SUCCESS,
  POST_TRANSFORMER_SUCCESS,
  DELETE_TRANSFORMER_SUCCESS,
  UPDATE_TRANSFORMER_SUCCESS,
  FILTER_TRANSFORMERS 
} from '../actions';

const transformers = [];

const initialState: IAppState = {
  transformers,
  filteredTransformers: transformers,
};

function getTransformers(state, action) : IAppState {
  return Object.assign({}, state, {
    transformers: action.transformers,
    filteredTransformers: action.transformers
  });
}

function postTransformer(state, action) : IAppState {
  return {
    ...state,
    transformers: [
      ...state.transformers,
      action.transformer
    ],
    filteredTransformers: [
      ...state.transformers,
      action.transformer
    ]
  };
}

function deleteTransformer(state, action) : IAppState {
  const index = state.transformers.findIndex((t) => t.id === action.id); 
  return {
    ...state,
    transformers: [
      ...state.transformers.slice(0, index),
      ...state.transformers.slice(index + 1)
    ],
    filteredTransformers: [
      ...state.transformers.slice(0, index),
      ...state.transformers.slice(index + 1)
    ]
  };
}

function updateTransformer(state, action) {
  return {
    ...state,
    transformers: state.transformers.map(transformer => 
      transformer.id === action.transformer.id ?
        { ...action.transformer } : 
        transformer
    ) 
  };
}

function filterTransformers(state, action) : IAppState {
  return Object.assign({}, state, {
    filteredTransformers: state.transformers.filter(t => 
      t.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1),
  });
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TRANSFORMERS_SUCCESS:
      return getTransformers(state, action);
    
    case POST_TRANSFORMER_SUCCESS:
      return postTransformer(state, action);
    
    case DELETE_TRANSFORMER_SUCCESS:
      return deleteTransformer(state, action);
    
    case UPDATE_TRANSFORMER_SUCCESS:
      return updateTransformer(state, action);
    
    case FILTER_TRANSFORMERS:
      return filterTransformers(state, action);

    default:
      return state;
  }
}