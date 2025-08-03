import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-statusbar',
  standalone: false,
  templateUrl: './statusbar.html',
  styleUrl: './statusbar.css'
})
export class Statusbar {
   @Input() votoComputado?: boolean;
}
