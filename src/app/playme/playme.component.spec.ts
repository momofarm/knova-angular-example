import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymeComponent } from './playme.component';

describe('PlaymeComponent', () => {
  let component: PlaymeComponent;
  let fixture: ComponentFixture<PlaymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaymeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
