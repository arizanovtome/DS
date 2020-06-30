/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeshProductivityComponent } from './mesh-productivity.component';

describe('MeshProductivityComponent', () => {
  let component: MeshProductivityComponent;
  let fixture: ComponentFixture<MeshProductivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeshProductivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshProductivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
