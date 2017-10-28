export interface ITransformer {
  id: number;
  name: string;
  vehicleGroup: string;
  vehicleType: string,
  vehicleModel: string,
  gear:string[],
  status: string
}
