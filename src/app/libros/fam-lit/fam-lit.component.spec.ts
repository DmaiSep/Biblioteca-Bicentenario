import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamLitComponent } from './fam-lit.component';

describe('FamLitComponent', () => {
  let component: FamLitComponent;
  let fixture: ComponentFixture<FamLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
