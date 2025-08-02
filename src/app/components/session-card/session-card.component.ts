import { ChangeDetectionStrategy, Component, inject, Input, model, signal } from '@angular/core';
import { Sessao } from '../../types/sessao';
import { MatDialog} from '@angular/material/dialog';
import { VotacaoDialogComponent } from '../votacao-dialog/votacao-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';



@Component({
  selector: 'app-session-card',
  imports: [CommonModule ,MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.css']
})
export class SessionCardComponent {
  @Input() session!: Sessao;
  readonly loggedUser = model('');
  readonly dialog = inject(MatDialog);
  readonly opcaoEscolhida = signal('');
  
  openDialog(): void {
    if (this.session.status === "CREATED"){
      const dialogRef = this.dialog.open(SimpleDialogComponent, {width: '250px', enterAnimationDuration:'0ms',exitAnimationDuration:'0ms'});
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed' + result);
        if (result !== undefined) {
          this.session.status = "OPEN_TO_VOTE";
        }
      });
    }else
    if (this.session.status === "OPEN_TO_VOTE" && !this.session.votoComputado){
      const dialogRef = this.dialog.open(VotacaoDialogComponent, {
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