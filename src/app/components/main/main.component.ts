import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from '../../services/data.service';
import { CreateDialogComponent, ReadDialogComponent, UpdateDialogComponent, DeleteDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  transformers:ITransformer[];

  constructor(private dataService:DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataService.getTransformers().subscribe((transformers) => {
      this.transformers = transformers;
    });
  }

  openCreateDialog(): void {
    let dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        result.id = Date.now(); // just to have unique ID, TODO: change to UUID
        this.transformers.push(result);
      }
    });
  }

  openReadDialog(transformer) : void {
    let dialogRef = this.dialog.open(ReadDialogComponent, {
      width: '250px',
      data: transformer
    });
  }

  openUpdateDialog(transformer): void {
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      width: '250px',
      data: transformer
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO: update on server side
    });
  }

  openDeleteDialog(transformer) : void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { name : transformer.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const index = this.transformers.indexOf(transformer);
        this.transformers.splice(index, 1);
      }
    });
  }
}

interface ITransformer {
  id: number;
  name: string;
  vehicleGroup: string;
  vehicleType: string,
  vehicleModel: string,
  gear:string[],
  status: string
}
