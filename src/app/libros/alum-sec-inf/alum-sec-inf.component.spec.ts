import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumSecInfComponent } from './alum-sec-inf.component';

describe('AlumSecInfComponent', () => {
  let component: AlumSecInfComponent;
  let fixture: ComponentFixture<AlumSecInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumSecInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumSecInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
