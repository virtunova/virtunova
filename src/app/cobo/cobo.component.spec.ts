import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoboComponent } from './cobo.component';

describe('CoboComponent', () => {
  let component: CoboComponent;
  let fixture: ComponentFixture<CoboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
