import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PautaCard } from './pauta-card/pauta-card';
import { Searchbar } from './searchbar/searchbar';
import { SimpleDialog } from './simple-dialog/simple-dialog';
import { Statusbar } from './statusbar/statusbar';
import { Toolbar } from './toolbar/toolbar';
import { VotacaoDialog } from './votacao-dialog/votacao-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../pages/login-form/login-form';
import { MaterialModule } from '../../core/material.module';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator';
import { DateFormatPipe } from '../pipes/date-format.pipe';

@NgModule({
   declarations: [
      LoginComponent, PautaCard, Searchbar, Statusbar, Toolbar, SimpleDialog, VotacaoDialog, LoadingIndicatorComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      AsyncPipe,
      DateFormatPipe
   ],
   exports: [
      LoginComponent, PautaCard, Searchbar, Statusbar, Toolbar, SimpleDialog, VotacaoDialog, LoadingIndicatorComponent,DateFormatPipe
   ],
   providers: [DateFormatPipe]
})
export class ComponentsModule { }
