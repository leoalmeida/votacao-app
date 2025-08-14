import { Component, inject, signal, Signal } from '@angular/core';
import { Associado } from '../../shared/types/associado';
import { FormControl } from '@angular/forms';
import { AssociadoService } from '../../shared/services/associado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-associado-details',
  standalone: false,
  templateUrl: './associado-details.html',
  styleUrl: './associado-details.css'
})
export class AssociadoDetails {
  protected readonly loggedUser = signal({} as Associado);
  nome = new FormControl('');
  email = new FormControl('');
  telefone = new FormControl('');
  
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private associadoService: AssociadoService = inject(AssociadoService);
  private navegador: Router = inject(Router);

  constructor() {
    this.activeRoute.queryParams.subscribe(params => {
      const type = params['type'];
      if (type === 'new') {
        // Initialize form for creating a new pauta
        this.nome.setValue('');
        this.email.setValue('');
        this.telefone.setValue('');
      } else {
        // Handle other types if necessary
        this.navegador.navigate(['home']);
      }
    });
    this.associadoService.loggedUser$.subscribe(value => this.loggedUser.set(value));
  }

  onSubmit() {
    const associado: Associado = {
      id: 0,
      nome: this.nome.value || '',
      email: this.email.value || '',
      telefone: this.telefone.value || ''
    };

    // Call service to create
    this.associadoService.incluirAssociado(associado).subscribe({
      next: (res) => {
        console.log('Associado created:', res);
        this.navegador.navigate(['home']);
      },
      error: (err) => {
        console.error('Error creating associado:', err);
      }
    });
  }
}
