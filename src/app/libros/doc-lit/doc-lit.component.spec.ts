import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocLitComponent } from './doc-lit.component';

describe('DocLitComponent', () => {
  let component: DocLitComponent;
  let fixture: ComponentFixture<DocLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
