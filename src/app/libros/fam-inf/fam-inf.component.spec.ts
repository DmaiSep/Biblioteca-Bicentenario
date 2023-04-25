import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamInfComponent } from './fam-inf.component';

describe('FamInfComponent', () => {
  let component: FamInfComponent;
  let fixture: ComponentFixture<FamInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
