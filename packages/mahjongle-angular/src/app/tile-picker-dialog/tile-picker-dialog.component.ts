import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Tile } from '../../models/tile.model';
import { TilePickerDialogData } from '../../models/tile-picker-dialog-data.model';


@Component({
  selector: 'app-tile-picker-dialog',
  templateUrl: './tile-picker-dialog.component.html',
  styleUrls: ['./tile-picker-dialog.component.scss']
})
export class TilePickerDialogComponent {

  currentTileValue: string = '1';
  currentSuit: string = 'bamboo';
  currentSuitCode: string = 'B';
  isCurrentSuitHonor: boolean = false;
  isGrouped: boolean = true;
  isDouble: boolean = false;
  tabIndex: number = 0;
  tileCodeGroupArray: Array<Array<string>> = [];

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
  }

  onTileClicked(tileValue: string): void {

    // Validate tile value
    this.currentTileValue = tileValue;

    if (this.isGrouped) {
      this.tabIndex = 2;
      this.updateTileCodeGroupArray();
    } else {
      // this.tabIndex = 0;
      this.dialogRef.close([ tileValue + this.currentSuitCode + '' ]);
      // TODO: Send data back
    }
  }

  updateTileCodeGroupArray(): void {

    this.tileCodeGroupArray = [];

    if (this.isDouble) {
      this.tileCodeGroupArray.push(new Array(2).fill(this.currentTileValue + this.currentSuitCode + ''));
      return;
    }

    if (this.currentSuit === 'dragon' || this.currentSuit === 'wind') {
      this.tileCodeGroupArray.push(new Array(3).fill(this.currentTileValue + this.currentSuitCode + ''));
      // this.tileCodeGroupArray.push(new Array(4).fill(this.currentTileValue + this.currentSuitCode + ''));
      // TODO: Consider layout for group of 4 (possibly add checkbox in hand-builder component instead)
      return;
    }

    const numberValue: number = Number(this.currentTileValue);

    if (numberValue < 8) {
      let group: Array<string> = [ '0', '1', '2' ];
      this.tileCodeGroupArray.push(group.map(n => Number(n) + numberValue + this.currentSuitCode + ''));
      
    }
    
    if (numberValue > 1 && numberValue < 9) {
      let group: Array<string> = [ '-1', '0', '1' ];
      this.tileCodeGroupArray.push(group.map(n => Number(n) + numberValue + this.currentSuitCode + ''));
    }

    if (numberValue > 2) {
      let group: Array<string> = [ '-2', '-1', '0' ];
      this.tileCodeGroupArray.push(group.map(n => Number(n) + numberValue + this.currentSuitCode + ''));
    }

    this.tileCodeGroupArray.push(new Array(3).fill(this.currentTileValue + this.currentSuitCode + ''));

    // TODO: Consider layout for group of 4 (possibly add checkbox in hand-builder component instead)
    // this.tileCodeGroupArray.push(new Array(4).fill(this.currentTileValue + this.currentSuitCode + ''));
  }

  onGroupClick(tileCodeArray: Array<string>): void {
    // console.log(tileCodeArray);
    // this.tabIndex = 0;
    this.dialogRef.close(tileCodeArray);
    // TODO: Send data back
  }

}
