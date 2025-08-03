import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
   selector: 'app-simple-dialog',
   standalone: false,
   changeDetection: ChangeDetectionStrategy.OnPush,
   templateUrl: './simple-dialog.html',
   styleUrl: './simple-dialog.css'
})
export class SimpleDialog {
   readonly dialogRef = inject(MatDialogRef<SimpleDialog>);
}
