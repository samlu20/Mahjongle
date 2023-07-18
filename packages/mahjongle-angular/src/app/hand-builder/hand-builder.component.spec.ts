import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBuilderComponent } from './hand-builder.component';

describe('HandBuilderComponent', () => {
  let component: HandBuilderComponent;
  let fixture: ComponentFixture<HandBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
