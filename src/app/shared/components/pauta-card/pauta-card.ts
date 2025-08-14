import { Component, inject, Input, model, signal, TemplateRef } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { SimpleDialog } from '../simple-dialog/simple-dialog';
import { SessaoService } from '../../services/sessao.service';
import { Pauta } from '../../types/pauta';
import { VotacaoService } from '../../services/votacao.service';
import { Voto } from '../../types/voto';
import { Associado } from '../../types/associado';
import { UserToken } from '../../types/user-token';

@Component({
   selector: 'app-pauta-card',
   standalone: false,
   templateUrl: './pauta-card.html',
   styleUrl: './pauta-card.css'
})
export class PautaCard {
   @Input() pauta!: Pauta;
   @Input() loggedUser!: UserToken;
   toggle?: "SIM"|"NAO";
   idAssociado: number = 0;
   readonly dialog = inject(MatDialog);

   private sessaoService: SessaoService = inject(SessaoService);
   private votacaoService: VotacaoService = inject(VotacaoService);
   constructor() {
      
   }

   confirm(dialogRef: TemplateRef<any>, opcaoEscolhida:"NAO" | "SIM") {
      if (!this.pauta.sessaoDto || !this.pauta.sessaoDto.id) {
         console.error("Pauta não possui uma sessão válida.");
         return;
      }
      const refOpen = this.dialog.open(dialogRef, {width: '250px', enterAnimationDuration:'0ms',exitAnimationDuration:'0ms'});
      const sessaoId:number = this.pauta.sessaoDto.id;
      refOpen.afterClosed().subscribe(
         result => {
            console.log('[Confirm]', result)
            if (result == true) {
               this.votacaoService.publicarVoto(this.loggedUser.id, sessaoId, opcaoEscolhida);
            }else{
               this.toggle = undefined;
            }
         }
      );
   }
   
   openDialog(): void {
      if (!this.pauta.sessaoDto || !this.pauta.sessaoDto.id) {
         console.error("Sessão não encontrada para a pauta.");
         return;
      }
      if (this.pauta.sessaoDto.status === "CREATED"){
         const dialogRef = this.dialog.open(SimpleDialog, {width: '250px', enterAnimationDuration:'0ms',exitAnimationDuration:'0ms'});
         const sessaoId:number = this.pauta.sessaoDto.id;
         dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' + result);
            if (result !== undefined) {
               this.sessaoService.startSession(sessaoId);
            }
         });
      }
   }

   cancelDialog(): void {
      if (!this.pauta.sessaoDto || !this.pauta.sessaoDto.id) {
         console.error("Sessão não encontrada para a pauta.");
         return;
      }
      if (this.pauta.sessaoDto.status === "OPEN_TO_VOTE"){
         const sessaoId:number = this.pauta.sessaoDto.id;
         const dialogRef = this.dialog.open(SimpleDialog, {width: '250px', enterAnimationDuration:'0ms',exitAnimationDuration:'0ms'});
         dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed' + result);
            if (result !== undefined) {
               this.sessaoService.cancelSession(sessaoId);
            }
         });
      }
   }
}

