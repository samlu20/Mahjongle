import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePickerDialogComponent } from './tile-picker-dialog.component';

describe('TilePickerDialogComponent', () => {
  let component: TilePickerDialogComponent;
  let fixture: ComponentFixture<TilePickerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilePickerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
