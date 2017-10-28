import { ITransformer } from '../components/transformers/ITransformer';

export interface IAppState {
  transformers: ITransformer[],
  filteredTransformers: ITransformer[],  
}