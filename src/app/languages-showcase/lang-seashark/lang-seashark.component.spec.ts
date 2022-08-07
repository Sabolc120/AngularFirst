import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangSeasharkComponent } from './lang-seashark.component';

describe('LangSeasharkComponent', () => {
  let component: LangSeasharkComponent;
  let fixture: ComponentFixture<LangSeasharkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangSeasharkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangSeasharkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
