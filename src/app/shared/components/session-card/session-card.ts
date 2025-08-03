import { Component, inject, Input, model, signal } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { SimpleDialog } from '../simple-dialog/simple-dialog';
import { VotacaoDialog } from '../votacao-dialog/votacao-dialog';
import { Sessao } from '../../types/sessao';



@Component({
   selector: 'app-session-card',
   standalone: false,
   templateUrl: './session-card.html',
   styleUrl: './session-card.css'
})
export class SessionCard {
   @Input() session!: Sessao;
   readonly loggedUser = model('');
   readonly dialog = inject(MatDialog);
   readonly opcaoEscolhida = signal('');

   openDialog(): void {
      if (this.session.status === "CREATED"){
      const dialogRef = this.dialog.open(SimpleDialog, {width: '250px', enterAnimationDuration:'0ms',exitAnimationDuration:'0ms'});
      dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed' + result);
         if (result !== undefined) {
            this.session.status = "OPEN_TO_VOTE";
         }
      });
      }else
      if (this.session.status === "OPEN_TO_VOTE" && !this.session.votoComputado){
      const dialogRef = this.dialog.open(VotacaoDialog, {
         data: {loggedUser: this.loggedUser(), pauta: this.session.pauta, opcaoEscolhida: this.opcaoEscolhida()},
      });

      dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed' + result);
         if (result !== undefined) {
            this.session.votoComputado = (result)?true:false;
         }
      });
      }
   }
}

