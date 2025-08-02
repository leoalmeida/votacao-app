import { Component, computed, inject, Input, input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCardComponent } from '../components/session-card/session-card.component';
import { SessionService } from '../services/session.service';
import { Sessao } from '../types/sessao';
import { Pauta } from '../types/pauta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SessionCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  idAssociado: string = "1";
  sessionsList: Sessao[] = [];
  searchQuery = signal<string>('');
  private sessionService: SessionService = inject(SessionService);

  constructor() {
    this.sessionService.getAll();
  }

  filteredSessionList = computed(() => {
    const normalizedQuery = this.searchQuery()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return this.sessionService.items().filter(x => x?.pauta.nome.toLowerCase().includes(normalizedQuery));
  });

  clear(){
    this.searchQuery.set("");
  }

  onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
  }

  onItemAdded(pauta: Pauta) {
    this.sessionService.submitSession(this.idAssociado,pauta);
  }
}