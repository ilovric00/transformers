import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    DialogComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],

  // check it
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }
