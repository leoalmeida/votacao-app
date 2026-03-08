import { Component, inject, Input } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from '../../../app.routes';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
   selector: 'app-toolbar',
   standalone: false,
   templateUrl: './toolbar.html',
   styleUrl: './toolbar.css',
})
export class Toolbar {
   @Input() title!: string;
   @Input() loggedUser!: string;
   routes: Routes = routes;
   opened = false;
   private tokenStorageService: TokenStorageService =
      inject(TokenStorageService);

   constructor() {
      this.tokenStorageService.loggedUser$.subscribe(
         (user) => (this.loggedUser = user.username),
      );
   }

   showMenu(): void {
      this.opened = !this.opened;
   }
}
