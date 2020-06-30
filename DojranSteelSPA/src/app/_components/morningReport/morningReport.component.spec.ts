/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MorningReportComponent } from './morningReport.component';

describe('MorningReportComponent', () => {
  let component: MorningReportComponent;
  let fixture: ComponentFixture<MorningReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
