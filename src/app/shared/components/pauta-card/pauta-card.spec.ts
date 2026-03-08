import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SessaoService } from '../../services/sessao.service';
import { VotacaoService } from '../../services/votacao.service';

import { PautaCard } from './pauta-card';

describe('SessionCard', () => {
   let component: PautaCard;
   let fixture: ComponentFixture<PautaCard>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [PautaCard],
         providers: [
            {
               provide: MatDialog,
               useValue: {
                  open: () => ({ afterClosed: () => of(undefined) }),
               },
            },
            {
               provide: SessaoService,
               useValue: {
                  startSession: () => true,
                  cancelSession: () => true,
               },
            },
            {
               provide: VotacaoService,
               useValue: { publicarVoto: () => true },
            },
         ],
         schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();

      fixture = TestBed.createComponent(PautaCard);
      component = fixture.componentInstance;
      component.loggedUser = {
         id: 1,
         username: 'tester',
         roles: [],
         permissions: [],
      };
      component.pauta = {
         idAssociado: 1,
         nome: 'Pauta teste',
         descricao: 'Descricao',
         categoria: 'Geral',
         sessaoDto: { id: 1, status: 'CREATED' },
      };
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
