import { Component, inject, signal, Signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociadoService } from '../../shared/services/associado.service';
import { Associado } from '../../shared/types/associado';
import { Pauta } from '../../shared/types/pauta';
import { PautaService } from '../../shared/services/pauta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pauta-details',
  standalone: false,
  templateUrl: './pauta-details.html',
  styleUrl: './pauta-details.css',
})
export class PautaDetails {
  nome = new FormControl('');
  descricao = new FormControl('');
  categoria = new FormControl('');
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private associadoService: AssociadoService = inject(AssociadoService);
  private pautaService: PautaService = inject(PautaService);
  private navegador: Router = inject(Router);
  protected loggedUser = signal({} as Associado);

  constructor() {
    this.activeRoute.queryParams.subscribe(params => {
      const type = params['type'];
      if (type === 'new') {
        // Initialize form for creating a new pauta
        this.nome.setValue('');
        this.descricao.setValue('');
      } else {
        // Handle other types if necessary
        this.navegador.navigate(['home']);
      }
    });
    this.associadoService.loggedUser$.subscribe(value => this.loggedUser.set(value));
  }

  onSubmit() {
    const pauta:Pauta = {
      nome: this.nome.value || '',
      descricao: this.descricao.value || '',
      categoria: this.categoria.value || '',
      idAssociado: this.loggedUser().id || 0 // Example ID, replace with actual logic
    };

    // Call service to create pauta
    this.pautaService.criarPauta(pauta, true);
    console.log('Pauta created:', pauta);
    this.navegador.navigate(['home']);
  }
  
}
