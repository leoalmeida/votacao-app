import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoDetails } from './associado-details';

describe('AssociadoDetails', () => {
  let component: AssociadoDetails;
  let fixture: ComponentFixture<AssociadoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociadoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociadoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
