import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CreateDialogComponent, ReadDialogComponent, UpdateDialogComponent, DeleteDialogComponent } from './components/dialog/dialog.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CreateDialogComponent,
    ReadDialogComponent,
    UpdateDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateDialogComponent, 
    ReadDialogComponent,
    UpdateDialogComponent,
    DeleteDialogComponent
  ]
})
export class AppModule { }
