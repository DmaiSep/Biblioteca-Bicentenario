import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumSecLitComponent } from './alum-sec-lit.component';

describe('AlumSecLitComponent', () => {
  let component: AlumSecLitComponent;
  let fixture: ComponentFixture<AlumSecLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumSecLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumSecLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
