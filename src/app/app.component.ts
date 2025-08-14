import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { routes } from './app.routes';
import { Routes } from '@angular/router';
import { AssociadoService } from './shared/services/associado.service';
import { TitleService } from './shared/services/title.service';
import { Associado } from './shared/types/associado';
import { TokenStorageService } from './shared/services/token-storage.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    protected readonly title = signal('Votação de Pautas');
    private roles: string[] = [];
    isloggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    
    
    private titleService: TitleService = inject(TitleService);
    
    constructor() {
        //this.loggedUser = this.associadoService.getById(1);
    }

    ngOnInit(): void {
      this.titleService.setTitle();
    }

    updateViewByRole(): void {
      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showModeratorBoard = this.roles.includes('MODERATOR');
    }
}
