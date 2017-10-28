import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ITransformer } from './ITransformer';
import { 
  ReadDialogComponent,
  UpdateDialogComponent,
  DeleteDialogComponent
} from '../dialog/dialog.component';
import { TransformerActions } from '../transformers/transformer.actions';

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.scss']
})
export class TransformerComponent implements OnInit {
  @Input() transformer: ITransformer;

  constructor(
    public dialog: MatDialog,
    private transformerActions: TransformerActions
  ) { }

  ngOnInit() { }

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
        this.transformerActions.deleteTransformer(transformer.id);
      }
    });
  }
}

