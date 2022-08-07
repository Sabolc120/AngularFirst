import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameSpringBootComponent } from './frame-spring-boot.component';

describe('FrameSpringBootComponent', () => {
  let component: FrameSpringBootComponent;
  let fixture: ComponentFixture<FrameSpringBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameSpringBootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameSpringBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
