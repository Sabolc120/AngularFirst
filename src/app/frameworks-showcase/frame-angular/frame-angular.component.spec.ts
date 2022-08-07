import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameAngularComponent } from './frame-angular.component';

describe('FrameAngularComponent', () => {
  let component: FrameAngularComponent;
  let fixture: ComponentFixture<FrameAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
