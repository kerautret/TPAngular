import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompQCMTPComponent } from './comp-qcmtp.component';

describe('CompQCMTPComponent', () => {
  let component: CompQCMTPComponent;
  let fixture: ComponentFixture<CompQCMTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompQCMTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompQCMTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
