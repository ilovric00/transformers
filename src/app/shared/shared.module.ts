import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatTableModule, 
  MatButtonModule, 
  MatSelectModule, 
  MatDialogModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatChipsModule 
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ]
})
export class SharedModule { }
