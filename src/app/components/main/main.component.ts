import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateDialogComponent } from '../dialog/dialog.component';
import { TransformerActions } from '../transformers/transformer.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    public dialog: MatDialog,
    private transformerActions: TransformerActions
  ) { }

  openCreateDialog(): void {
    let dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.transformerActions.postTransformer(result);
      }
    });
  }

}
