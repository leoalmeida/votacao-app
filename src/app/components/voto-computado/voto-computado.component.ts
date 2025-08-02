import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voto-computado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voto-computado.component.html',
  styleUrls: ['./voto-computado.component.css']
})
export class VotoComputadoComponent {
    @Input() votoComputado?: boolean;
}