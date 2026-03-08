import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { PautaService } from '../../shared/services/pauta.service';
import { LoadingService } from '../../shared/services/loading.service';
import { TokenStorageService } from '../../shared/services/token-storage.service';

import { Home } from './home';

describe('Home', () => {
   let component: Home;
   let fixture: ComponentFixture<Home>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [Home],
         providers: [
            {
               provide: PautaService,
               useValue: {
                  buascarPautasComVotos: () => undefined,
                  items: () => [],
               },
            },
            {
               provide: LoadingService,
               useValue: {
                  loadingOn: () => undefined,
                  loadingOff: () => undefined,
               },
            },
            {
               provide: TokenStorageService,
               useValue: {
                  loggedUser$: of({ id: 1, username: 'tester', roles: [] }),
               },
            },
            {
               provide: Router,
               useValue: { navigate: () => Promise.resolve(true) },
            },
         ],
         schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();

      fixture = TestBed.createComponent(Home);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
