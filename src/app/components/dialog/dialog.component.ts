import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../../services/data.service';

function parseVehicleTypes(vehicleTypes): any {
  let vehicleGroup = [];
  let vehicleType = {};
  let vehicleModel = {};

  // status
  const status = ['OK', 'MIA', 'INJURED'];

  // vehicleGroup
  vehicleGroup = vehicleTypes
    .map( item => item.group )
    .filter( ( item, idx, arr ) => arr.indexOf( item ) == idx );

  // vehicleType
  vehicleGroup.forEach(group => {
    vehicleType[group] = vehicleTypes.map(item => {
      if(item.group === group) {
        return item.type;
      }
    })
    .filter( ( item, idx, arr ) => arr.indexOf( item || !undefined ) == idx );

    // vehicleModel
    vehicleType[group].forEach(type => {
      vehicleModel[type] = vehicleTypes.map(item => {
        if(item.type === type) {
          return item.model;
        }
      })
      .filter( ( item, idx, arr ) => arr.indexOf( item || !undefined ) == idx );
    });
  });
  
  return {
    vehicleGroup,
    vehicleType,
    vehicleModel,
    status
  };
}

// ===== CREATE ==================================================
@Component({
  templateUrl: './CRUD/create.dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  vehicleGroup: string[];
  vehicleType: {};
  vehicleModel: {};
  status: string[];  

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.vehicleGroup = [];
      this.vehicleType = {};
      this.vehicleModel = {};
      this.status = [];      
    }

  ngOnInit() { 
    this.dataService.getVehicleTypes()
    .subscribe(vehicleTypes => {
      const result = parseVehicleTypes(vehicleTypes);
      this.vehicleGroup = result.vehicleGroup;
      this.vehicleType = result.vehicleType;
      this.vehicleModel = result.vehicleModel;
      this.status = result.status;      
    });
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}

// ===== READ ==================================================
@Component({
  templateUrl: './CRUD/read.dialog.component.html',
  styleUrls: ['./dialog.component.scss']  
})
export class ReadDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ReadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// ===== UPDATE ==================================================
@Component({
  templateUrl: './CRUD/update.dialog.component.html',
  styleUrls: ['./dialog.component.scss']  
})
export class UpdateDialogComponent implements OnInit {
  vehicleGroup: string[];
  vehicleType: {};
  vehicleModel: {};
  status: string[];    

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.vehicleGroup = [];
      this.vehicleType = {};
      this.vehicleModel = {};
      this.status = [];      
    }
  
  ngOnInit() { 
    this.dataService.getVehicleTypes()
    .subscribe(vehicleTypes => {
      const result = parseVehicleTypes(vehicleTypes);
      this.vehicleGroup = result.vehicleGroup;
      this.vehicleType = result.vehicleType;
      this.vehicleModel = result.vehicleModel;
      this.status = result.status;      
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// ===== DELETE ==================================================
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
