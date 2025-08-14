import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatCardContent } from '@angular/material/card';
import { AuthService } from '../../shared/services/auth.service';
import { TokenStorageService } from '../../shared/services/token-storage.service';
import { merge } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginComponent implements OnInit {
  readonly username = new FormControl('', [Validators.required]);
  readonly password = new FormControl('', [Validators.required]);
  form: any = {
    username: null,
    password: null
  }
  isLoggedIn: boolean = false;
  isLoginError: boolean = false;
  errorMessage = signal<string>('');
  roles: string[] = [];

  private authService:AuthService = inject(AuthService);
  private tokenStorage:TokenStorageService = inject(TokenStorageService);
  private navigator: Router = inject(Router);

  constructor(){
    merge(
      this.username.valueChanges,
      this.password.valueChanges,
      this.username.statusChanges,
      this.password.statusChanges
    ).subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.password.invalid || this.username.invalid) {
      this.errorMessage.set('Dados inválidos.');
    } else {
      this.errorMessage.set('');
    }
  }

  ngOnInit() {
    this.reloadPage();
  }

  login() {
    if (this.username.valid && this.password.valid) {
      const username = this.username.value || "";
      const password = this.password.value || "";
      this.authService.login(username, password).subscribe(
        user => {
          if (user){
            this.reloadPage();
          }
        }
      )
    }
  }

  reloadPage() {
    this.isLoggedIn = this.tokenStorage.isAuthenticated(); 
    if (this.isLoggedIn) {
        this.navigator.navigate(['/home']);
    }
  }

  @Input() error: string = '';
}
