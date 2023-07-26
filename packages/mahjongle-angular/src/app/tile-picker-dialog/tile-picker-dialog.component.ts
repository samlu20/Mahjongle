import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TilePickerDialogData } from '../../models/tile-picker-dialog-data.model';
import { TilePickerDialogResult } from '../../models/tile-picker-dialog-result.model';


@Component({
  selector: 'app-tile-picker-dialog',
  templateUrl: './tile-picker-dialog.component.html',
  styleUrls: ['./tile-picker-dialog.component.scss']
})
export class TilePickerDialogComponent {

  currentTileValue: string = '';
  currentSuit: string = '';
  currentSuitCode: string = '';

  isCurrentSuitHonor: boolean = false;
  isGrouped: boolean = true;
  isDouble: boolean = false;

  tabIndex: number = 0;
  tileCodeGroupArray: Array<Array<string>> = [];
  tripleGroup: Array<string> = [];
  quadrupleGroup: Array<string> = [];

  constructor(public dialogRef: MatDialogRef<TilePickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TilePickerDialogData,) {

    this.isGrouped = data.isGrouped;
    this.isDouble = data.isDouble;
  }

  onSuitButtonClicked(suit: string): void {
    const suitCodeSet: Set<string> = new Set([ 'bamboo', 'dot', 'character', 'wind', 'dragon']);
    if (!suitCodeSet.has(suit.toLowerCase()))
      return;

    this.currentSuit = suit;
    this.currentSuitCode = suit[0].toUpperCase();

    if (suit === 'dragon' || suit === 'wind')
      this.isCurrentSuitHonor = true;
    else
      this.isCurrentSuitHonor = false;

    this.tabIndex = 1;
    this.currentTileValue = ''; // Prevents showing groups of previously selected value
  }

  onTileClicked(tileValue: string): void {

    // Validate tile value
    this.currentTileValue = tileValue;

    if (this.isGrouped) {
      this.tabIndex = 2;
      this.updateTileCodeGroupArray();
    } else {
      // this.tabIndex = 0;
      this.dialogRef.close([ this.currentSuitCode + tileValue + '' ]);
      // TODO: Send data back
    }
  }

  updateTileCodeGroupArray(): void {

    this.tileCodeGroupArray = [];

    if (this.isDouble) {
      this.tileCodeGroupArray.push(new Array(2).fill(this.currentSuitCode + this.currentTileValue + ''));
      return;
    }

    if (this.currentSuit === 'dragon' || this.currentSuit === 'wind') {
      this.tileCodeGroupArray.push(new Array(3).fill(this.currentSuitCode + this.currentTileValue + ''));
      // this.tileCodeGroupArray.push(new Array(4).fill(this.currentTileValue + this.currentSuitCode + ''));
      // TODO: Consider layout for group of 4 (possibly add checkbox in hand-builder component instead)
      return;
    }

    const numberValue: number = Number(this.currentTileValue);

    if (numberValue < 8) {
      let group: Array<string> = [ '0', '1', '2' ];
      this.tileCodeGroupArray.push(group.map(n => this.currentSuitCode + (Number(n) + numberValue) + ''));
      
    }
    
    if (numberValue > 1 && numberValue < 9) {
      let group: Array<string> = [ '-1', '0', '1' ];
      this.tileCodeGroupArray.push(group.map(n => this.currentSuitCode + (Number(n) + numberValue) + ''));
    }

    if (numberValue > 2) {
      let group: Array<string> = [ '-2', '-1', '0' ];
      this.tileCodeGroupArray.push(group.map(n => this.currentSuitCode + (Number(n) + numberValue) + ''));
    }

    this.tileCodeGroupArray.push(new Array(3).fill(this.currentSuitCode + this.currentTileValue + ''));

    // TODO: Consider layout for group of 4 (possibly add checkbox in hand-builder component instead)
    // this.tileCodeGroupArray.push(new Array(4).fill(this.currentTileValue + this.currentSuitCode + ''));
    this.tripleGroup = new Array(3).fill(this.currentSuitCode + this.currentTileValue + '');
    this.quadrupleGroup = new Array(4).fill(this.currentSuitCode + this.currentTileValue + '');
  }

  onGroupClick(tileCodeArray: Array<string>, concealed?: boolean): void {
    this.dialogRef.close({
      tileKeyArray: tileCodeArray.slice(0,3),
      isConcealed: !!concealed,
      isKong: tileCodeArray.length === 4
    } as TilePickerDialogResult);
  }

}
