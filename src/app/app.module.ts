import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { DataService } from './services/data.service';
import { SortPipe } from './pipes/sort.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CreateDialogComponent, ReadDialogComponent, UpdateDialogComponent, DeleteDialogComponent } from './components/dialog/dialog.component';
import { ChipsComponent } from './components/chips/chips.component';

import { TransformerListComponent } from './components/transformers/transformer-list.component';
import { TransformerComponent } from './components/transformers/transformer.component';
import { TransformerActions } from './components/transformers/transformer.actions';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './redux';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CreateDialogComponent,
    ReadDialogComponent,
    UpdateDialogComponent,
    DeleteDialogComponent,
    TransformerListComponent,
    TransformerComponent,
    SortPipe,
    ChipsComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    NgReduxModule
  ],
  providers: [DataService, TransformerActions],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateDialogComponent, 
    ReadDialogComponent,
    UpdateDialogComponent,
    DeleteDialogComponent
  ]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
