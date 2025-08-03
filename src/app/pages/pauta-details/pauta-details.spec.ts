import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PautaDetails } from './pauta-details';

describe('PautaDetails', () => {
  let component: PautaDetails;
  let fixture: ComponentFixture<PautaDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PautaDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PautaDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
