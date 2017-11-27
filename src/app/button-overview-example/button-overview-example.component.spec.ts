import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOverviewExampleComponent } from './button-overview-example.component';

describe('ButtonOverviewExampleComponent', () => {
  let component: ButtonOverviewExampleComponent;
  let fixture: ComponentFixture<ButtonOverviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOverviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
