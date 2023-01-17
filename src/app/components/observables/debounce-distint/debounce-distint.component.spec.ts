import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceDistintComponent } from './debounce-distint.component';

describe('DebounceDistintComponent', () => {
  let component: DebounceDistintComponent;
  let fixture: ComponentFixture<DebounceDistintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceDistintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceDistintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
