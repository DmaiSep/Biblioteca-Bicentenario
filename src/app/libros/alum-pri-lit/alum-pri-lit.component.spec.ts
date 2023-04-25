import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumPriLitComponent } from './alum-pri-lit.component';

describe('AlumPriLitComponent', () => {
  let component: AlumPriLitComponent;
  let fixture: ComponentFixture<AlumPriLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumPriLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumPriLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
