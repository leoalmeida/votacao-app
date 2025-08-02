import { Component, computed, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCardComponent } from '../../components/session-card/session-card.component';
import { SessionService } from '../../services/session.service';
import { Sessao } from '../../types/sessao';
import { Pauta } from '../../types/pauta';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SessionCardComponent,SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() loggedUser!: string;
  sessionsList: Sessao[] = [];
  private sessionService: SessionService = inject(SessionService);
  searchQuery = signal<string>('');

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

  handleMessage(message: string) {
    console.log('Received message from child:', message);
    this.searchQuery.set(message);
  }

  onItemAdded(pauta: Pauta) {
    this.sessionService.submitSession(this.loggedUser,pauta);
  }
}