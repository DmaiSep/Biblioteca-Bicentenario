import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumPreInfComponent } from './alum-pre-inf.component';

describe('AlumPreInfComponent', () => {
  let component: AlumPreInfComponent;
  let fixture: ComponentFixture<AlumPreInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumPreInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumPreInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
