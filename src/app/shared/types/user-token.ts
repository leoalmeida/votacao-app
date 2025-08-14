import { Injectable } from "@angular/core";

@Injectable()
export class UserToken {
    id: number = 0;
    username: string = '';
    roles: string[] = [];
    permissions: string[] = [];
}