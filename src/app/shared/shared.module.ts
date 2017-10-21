import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTableModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class SharedModule { }
