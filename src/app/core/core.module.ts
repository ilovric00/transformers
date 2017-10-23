import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class CoreModule { }
