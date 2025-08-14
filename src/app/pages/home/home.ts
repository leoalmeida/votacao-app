import { Component, computed, inject, Input, Signal, signal } from '@angular/core';
import { Pauta } from '../../shared/types/pauta';
import { AssociadoService } from '../../shared/services/associado.service';
import { PautaService } from '../../shared/services/pauta.service';
import { Associado } from '../../shared/types/associado';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { LoadingService } from '../../shared/services/loading.service';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { UserToken } from '../../shared/types/user-token';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected loggedUser = signal({} as UserToken);
  pautaList: Pauta[] = [];
  searchQuery = signal<string>('');
  private pautaService: PautaService = inject(PautaService);
  private associadoService: AssociadoService = inject(AssociadoService);
  private loadingService: LoadingService = inject(LoadingService);
  private tokenStorageService: TokenStorageService = inject(TokenStorageService);
  private navigator: Router = inject(Router);

  constructor() {
    try {
      this.loadingService.loadingOn();
      this.tokenStorageService.loggedUser$.subscribe(user => {
          this.loggedUser.set(user);
          this.pautaService.buascarPautasComVotos(user.id);
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingService.loadingOff();
    }
  }

  filteredPautaList = computed(() => {
    try {
      this.loadingService.loadingOn();
      const normalizedQuery = this.searchQuery()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      return this.pautaService.items().filter(x => x?.nome.toLowerCase().includes(normalizedQuery));
    } catch (error) {
      console.log(error);
      return;
    } finally {
      this.loadingService.loadingOff();
    }
  });

  handleMessage(message: string) {
    console.log('Received message from child:', message);
    this.searchQuery.set(message);
  }

  onCreatePauta(){
    this.navigator.navigate(['pauta-details'], {
      queryParams: { type: 'new' }
    });
  }

}
