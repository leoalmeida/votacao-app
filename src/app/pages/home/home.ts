import { Component, computed, inject, Input, signal } from '@angular/core';
import { Sessao } from '../../shared/types/sessao';
import { SessaoService } from '../../shared/services/sessao.service';
import { Pauta } from '../../shared/types/pauta';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 @Input() loggedUser!: string;
  sessionsList: Sessao[] = [];
  private sessaoService: SessaoService = inject(SessaoService);
  searchQuery = signal<string>('');

  constructor() {
    this.sessaoService.getAll();
  }

  filteredSessionList = computed(() => {
    const normalizedQuery = this.searchQuery()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return this.sessaoService.items().filter(x => x?.pauta.nome.toLowerCase().includes(normalizedQuery));
  });

  handleMessage(message: string) {
    console.log('Received message from child:', message);
    this.searchQuery.set(message);
  }

  onItemAdded(pauta: Pauta) {
    this.sessaoService.submitSession(this.loggedUser,pauta);
  }
}
