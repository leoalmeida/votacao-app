import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCard } from './session-card/session-card';
import { Searchbar } from './searchbar/searchbar';
import { SimpleDialog } from './simple-dialog/simple-dialog';
import { Statusbar } from './statusbar/statusbar';
import { Toolbar } from './toolbar/toolbar';
import { VotacaoDialog } from './votacao-dialog/votacao-dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';


@NgModule({
   declarations: [
      SessionCard, Searchbar, Statusbar, Toolbar, SimpleDialog, VotacaoDialog
   ],
   imports: [
      CommonModule,
      MatButtonModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      FormsModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose
   ],
   exports: [
      SessionCard, Searchbar, Statusbar, Toolbar, SimpleDialog, VotacaoDialog
   ]
})
export class ComponentsModule { }
