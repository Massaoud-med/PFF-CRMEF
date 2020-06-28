/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlansFormationComponent } from './plans-formation.component';

describe('PlansFormationComponent', () => {
  let component: PlansFormationComponent;
  let fixture: ComponentFixture<PlansFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
