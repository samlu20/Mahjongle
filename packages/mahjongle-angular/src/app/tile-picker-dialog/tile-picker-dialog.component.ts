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
  doSuggest: boolean = true;
  doAdd: boolean = false;

  tabIndex: number = 0;
  tileCodeGroupArray: Array<Array<string>> = [];
  tripleGroup: Array<string> = [];
  quadrupleGroup: Array<string> = [];

  constructor(public dialogRef: MatDialogRef<TilePickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TilePickerDialogData,) {

    this.doSuggest = data.doSuggest;
    this.doAdd = data.doAdd;
  }

  onSuitButtonClicked(suit: string): void {
    const suitCodeSet: Set<string> = new Set([ 'bamboo', 'dot', 'character', 'wind', 'dragon']);
    if (!suitCodeSet.has(suit.toLowerCase()))
      return;

    this.currentSuit = suit;
    this.currentSuitCode = suit.toLowerCase() === 'dragon' ? 'R' : suit[0].toUpperCase();

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

    if (this.doSuggest) {
      this.tabIndex = 2;
      this.updateTileCodeGroupArray();
    } else {
      // this.dialogRef.close([ String(this.currentSuitCode + tileValue) ]);
      this.dialogRef.close({
        tileKeyArray: [ String(this.currentSuitCode + tileValue) ],
        isConcealed: false,
      } as TilePickerDialogResult);
    }
  }

  updateTileCodeGroupArray(): void {

    this.tileCodeGroupArray = [];

    this.tileCodeGroupArray.push(new Array(1).fill(String(this.currentSuitCode + this.currentTileValue)));
    this.tileCodeGroupArray.push(new Array(2).fill(String(this.currentSuitCode + this.currentTileValue)));


    if (this.currentSuit !== 'dragon' && this.currentSuit !== 'wind') {
      const numberValue: number = Number(this.currentTileValue);

      if (numberValue < 8) {
        let group: Array<string> = [ '0', '1', '2' ];
        this.tileCodeGroupArray.push(group.map(n => String(this.currentSuitCode + (Number(n) + numberValue))));
        
      }
      
      if (numberValue > 1 && numberValue < 9) {
        let group: Array<string> = [ '-1', '0', '1' ];
        this.tileCodeGroupArray.push(group.map(n => String(this.currentSuitCode + (Number(n) + numberValue))));
      }

      if (numberValue > 2) {
        let group: Array<string> = [ '-2', '-1', '0' ];
        this.tileCodeGroupArray.push(group.map(n => String(this.currentSuitCode + (Number(n) + numberValue))));
      }
    }

    this.tileCodeGroupArray.push(new Array(3).fill(String(this.currentSuitCode + this.currentTileValue)));
    this.tripleGroup = new Array(3).fill(String(this.currentSuitCode + this.currentTileValue));
    this.quadrupleGroup = new Array(4).fill(String(this.currentSuitCode + this.currentTileValue));
  }

  onGroupClick(tileCodeArray: Array<string>, concealed?: boolean): void {
    this.dialogRef.close({
      tileKeyArray: tileCodeArray,
      isConcealed: !!concealed
    } as TilePickerDialogResult);
  }

  onDeleteClick() {
    this.dialogRef.close({
      doDelete: true
    } as TilePickerDialogResult);
  }
  onCloseClick() {
    this.dialogRef.close();
  }

}
