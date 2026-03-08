import { Component, inject, OnInit, signal } from '@angular/core';
import { TitleService } from './shared/services/title.service';

@Component({
   selector: 'app-root',
   standalone: false,
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
   protected readonly title = signal('Votação de Pautas');
   private roles: string[] = [];
   isloggedIn = false;
   showAdminBoard = false;
   showModeratorBoard = false;

   private titleService: TitleService = inject(TitleService);

   ngOnInit(): void {
      this.titleService.setTitle();
   }

   updateViewByRole(): void {
      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showModeratorBoard = this.roles.includes('MODERATOR');
   }
}
