import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumPreLitComponent } from './alum-pre-lit.component';

describe('AlumPreLitComponent', () => {
  let component: AlumPreLitComponent;
  let fixture: ComponentFixture<AlumPreLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumPreLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumPreLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
