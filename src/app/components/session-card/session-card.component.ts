import { Component, Input } from '@angular/core';
import { Sessao } from '../../types/sessao';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.css']
})
export class SessionCardComponent {
  @Input() session!: Sessao;
  
  handleStatusToggle() {
    if (this.session.status === "OPEN_TO_VOTE" && !this.session.votoComputado){
      this.session.votoComputado = true;
    }
  };
}