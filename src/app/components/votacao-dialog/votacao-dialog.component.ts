import { Component, inject, model } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DialogData } from "../../types/dialog-votacao";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
  selector: 'app-votacao-dialog',
  templateUrl: 'votacao-dialog.component.html',
  imports: [
    MatFormFieldModule,
    MatButtonToggleModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class VotacaoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<VotacaoDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly opcaoEscolhida = model(this.data.opcaoEscolhida);

  onNoClick(): void {
    this.dialogRef.close();
  }
}