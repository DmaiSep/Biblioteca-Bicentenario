import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumPriInfComponent } from './alum-pri-inf.component';

describe('AlumPriInfComponent', () => {
  let component: AlumPriInfComponent;
  let fixture: ComponentFixture<AlumPriInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumPriInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumPriInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
