import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTableModule, MatButtonModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class SharedModule { }
