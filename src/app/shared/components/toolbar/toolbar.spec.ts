import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { TokenStorageService } from '../../services/token-storage.service';

import { Toolbar } from './toolbar';

describe('Toolbar', () => {
   let component: Toolbar;
   let fixture: ComponentFixture<Toolbar>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [Toolbar],
         providers: [
            {
               provide: TokenStorageService,
               useValue: { loggedUser$: of({ username: 'tester' }) },
            },
         ],
         schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();

      fixture = TestBed.createComponent(Toolbar);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
