import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatTableModule, 
  MatButtonModule, 
  MatSelectModule, 
  MatDialogModule, 
  MatFormFieldModule, 
  MatInputModule 
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
