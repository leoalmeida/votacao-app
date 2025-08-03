import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacaoDialog } from './votacao-dialog';

describe('VotacaoDialog', () => {
  let component: VotacaoDialog;
  let fixture: ComponentFixture<VotacaoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotacaoDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotacaoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
