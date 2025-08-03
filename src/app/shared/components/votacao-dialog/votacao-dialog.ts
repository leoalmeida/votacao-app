import { Component, inject, model } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogVotacao } from "../../types/dialog-votacao";

@Component({
   selector: 'app-votacao-dialog',
   standalone: false,
   templateUrl: './votacao-dialog.html',
   styleUrl: './votacao-dialog.css'
})
export class VotacaoDialog {
   readonly dialogRef = inject(MatDialogRef<VotacaoDialog>);
   readonly data = inject<DialogVotacao>(MAT_DIALOG_DATA);
   readonly opcaoEscolhida = model(this.data.opcaoEscolhida);

   onNoClick(): void {
      this.dialogRef.close();
   }
}
