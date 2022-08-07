import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangJavaComponent } from './lang-java.component';

describe('LangJavaComponent', () => {
  let component: LangJavaComponent;
  let fixture: ComponentFixture<LangJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
