import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Tile, TileGroup, TileHand } from '../../models/tile.model';
import { TileEnum } from '../../models/tile-enums.model';
import { TilePickerDialogData } from '../../models/tile-picker-dialog-data.model';
import { TilePickerDialogResult } from '../../models/tile-picker-dialog-result.model';
import { HelpDialogData } from '../../models/help-dialog-data.model';
import { TilePickerDialogComponent } from '../tile-picker-dialog/tile-picker-dialog.component';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';

const NORMAL_HAND_SIZE = 14;

@Component({
  selector: 'app-hand-builder',
  templateUrl: './hand-builder.component.html',
  styleUrls: ['./hand-builder.component.scss']
})
export class HandBuilderComponent {

  hand: TileHand = new TileHand();
  defaultHand: TileHand = new TileHand();

  doSuggest: boolean = true;
  isSubmitButtonDisabled: boolean = true;
  isSingleWaitDisabled: boolean = false;

  constructor(private dialog: MatDialog) {
    // this.hand.tileGroupArray.push(new TileGroup(new Array(3).fill('Back')));
    this.hand.tileGroupArray.push(new TileGroup(new Array(3).fill('C1')));
    this.hand.tileGroupArray.push(new TileGroup(new Array(3).fill('D2')));
    this.hand.tileGroupArray.push(new TileGroup(new Array(3).fill('B3')));
    this.hand.tileGroupArray.push(new TileGroup(new Array(3).fill('C9')));
    this.hand.tileGroupArray.push(new TileGroup(new Array(2).fill('RG')));
    this.defaultHand = {...this.hand} as TileHand;

    // TODO: Eventually be able to take in a hand?
  }

  ngOnInit() {
    this.updateSubmitButton();
  }

  toggleSuggest(e: any) {
    this.doSuggest = !this.doSuggest;
  }

  openTilePickerDialog(groupIndexIn?: number) {
    const groupIndex: number = Number(groupIndexIn);

    const dialogRef = this.dialog.open(TilePickerDialogComponent, {
      data: {
        doSuggest: this.doSuggest,
        doAdd: isNaN(groupIndex),
      } as TilePickerDialogData,
      exitAnimationDuration: 500
    });

    dialogRef.afterClosed().subscribe((result: TilePickerDialogResult) => {
      if (!isNaN(groupIndex)) {
        if (result?.doDelete && Number(groupIndex) < this.hand.tileGroupArray.length) {
          this.hand.tileGroupArray.splice(groupIndex,1);
        }
        if (!result?.doDelete && result?.tileKeyArray) {
          this.hand.tileGroupArray[Number(groupIndex)] = new TileGroup(
            [...result.tileKeyArray],
            result.isConcealed
          );
        }
      } 
      else if (result?.tileKeyArray) {
        this.hand.tileGroupArray.push(new TileGroup(
          [...result.tileKeyArray],
          result.isConcealed
        ));
      }

      this.updateSubmitButton();
      this.updateSingleWait();
    });
  }

  openHelpDialog(title: string, content: string): void {
    this.dialog.open(HelpDialogComponent, {
      data: {
        title: title,
        content: content
      } as HelpDialogData,
      exitAnimationDuration: 500
    });
  }

  updateSubmitButton(): void {
    let tileCount: number = 0;

    for (let group of this.hand.tileGroupArray) {
      if (group.tileKeyArray.includes('Back') || group.tileKeyArray.includes('Invalid')) {
        this.isSubmitButtonDisabled = true;
        return;
      }

      tileCount += group.tileKeyArray?.length;
    };

    this.isSubmitButtonDisabled = tileCount < NORMAL_HAND_SIZE ? true : false;
  }

  updateSingleWait(): void {
    let kongCount: number = 0;
    for (let group of this.hand.tileGroupArray) {
      if (group.tileKeyArray.length === 4)
        kongCount++;
    }

    this.hand.isSingleWait = kongCount === 4 ? false : this.hand.isSingleWait;
    this.isSingleWaitDisabled = kongCount === 4;

  }

  // TODO: This doesn't work!
  resetHand(): void {
    this.hand = new TileHand(this.defaultHand.tileGroupArray);
    this.updateSubmitButton();
  }

}
