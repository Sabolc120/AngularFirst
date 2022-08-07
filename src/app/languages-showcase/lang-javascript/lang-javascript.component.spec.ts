import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangJavascriptComponent } from './lang-javascript.component';

describe('LangJavascriptComponent', () => {
  let component: LangJavascriptComponent;
  let fixture: ComponentFixture<LangJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
