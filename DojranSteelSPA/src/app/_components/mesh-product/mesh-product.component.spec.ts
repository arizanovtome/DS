/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeshProductComponent } from './mesh-product.component';

describe('MeshProductComponent', () => {
  let component: MeshProductComponent;
  let fixture: ComponentFixture<MeshProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeshProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeshProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
