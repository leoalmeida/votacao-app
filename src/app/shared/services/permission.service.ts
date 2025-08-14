import { inject, Injectable } from '@angular/core';

import { UserToken } from '../types/user-token';

@Injectable()
export class PermissionService {
  canActivate(currentUser: UserToken, userId: number, role:string): boolean {
    return currentUser.id === userId && currentUser.roles.includes(role);
  }
  canMatch(currentUser: UserToken, role: string ): boolean {
    return currentUser.roles.includes(role);
  }
}
