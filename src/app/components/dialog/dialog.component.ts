import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  templateUrl: './CRUD/create.dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class CreateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  templateUrl: './CRUD/read.dialog.component.html',
})
export class ReadDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ReadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  templateUrl: './CRUD/update.dialog.component.html',
  styleUrls: ['./dialog.component.scss']  
})
export class UpdateDialogComponent {
  status = [
    { value: 'OK' },
    { value: 'MIA' },
    { value: 'INJURED' }
  ];

  vehicleGroup = [
    { value: 'Air' },
    { value: 'Sea' },
    { value: 'Land' },
  ];

  vehicleType = {
    Air: [{ value: 'Plane' }, { value: 'Helicopter' }],
    Sea: [{ value: 'Boat' }, { value: 'Submarine' }],
    Land: [{ value: 'Car' }, { value: 'Truck' }]    
  }

  vehicleModel = {
    Plane: [{ value: 'F-22' }, { value: 'Sukhoi' }, { value: 'MiG' }],
    Helicopter: [{ value: 'Apache' }, { value: 'Kamov' }],
    Boat: [{ value: 'Sailboat' }, { value: 'Jetboat' }],
    Submarine: [{ value: 'Standard' }],
    Car: [{ value: 'Camaro' }, { value: 'AMG GT R' }, { value: 'Lamborghini' }],
    Truck: [{ value: 'Unimog' }, { value: 'Western Star 5700' }]        
  }

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  templateUrl: './CRUD/delete.dialog.component.html',
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
