import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

export const canActivateUser: CanActivateFn = () => {
   const tokenService = inject(TokenStorageService);
   return tokenService.isAuthenticated();
};
