import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Tile, TileGroup, TileHand } from '../../models/tile.model';
import { TileEnum } from '../../models/tile-enums.model';
import { TilePickerDialogData } from '../../models/tile-picker-dialog-data.model';
import { TilePickerDialogResult } from '../../models/tile-picker-dialog-result.model';
import { HelpDialogData } from '../../models/help-dialog-data.model';
import { TilePickerDialogComponent } from '../tile-picker-dialog/tile-picker-dialog.component';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';

interface GroupInformation {
  tileKeyArray: Array<string>;
  isKong: boolean;
  isConcealed: boolean;
};

const WINNING_HAND_SIZE = 13;
const NORMAL_HAND_SIZE = 12;

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

  // Hand info
  // TODO: Turn this into a model
  flowerTileCount: number = 0;
  isSingleWait: boolean = false;
  isSingleWaitDisabled: boolean = false;
  isSeatWind: boolean = false;
  isPrevalentWind: boolean = false;
  isLastOfKind: boolean = false;
  isLastTile: boolean = false;
  isReplacementTile: boolean = false;
  isRobbingKong: boolean = false;
  isMeldedHand: boolean = false;
  isConcealedHandDiscard: boolean = false;
  isConcealedHandSelf: boolean = false;
  private handGroupInformation: Array<GroupInformation> = [];

  constructor(private dialog: MatDialog) {
    this.hand.tileGroupArray.push(new TileGroup(new Array(3).fill('Back')));
    // this.handGroup.tileGroupArray.push(new TileGroup(new Array(3).fill('Back')));
    // this.handGroup.tileGroupArray.push(new TileGroup(new Array(3).fill('Back')));
    // this.handGroup.tileGroupArray.push(new TileGroup(new Array(3).fill('Back')));
    // this.handGroup.tileGroupArray.push(new TileGroup(new Array(2).fill('Back')));
    this.defaultHand = {...this.hand} as TileHand;

    // TODO: Eventually be able to take in a hand
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

    this.isSubmitButtonDisabled = tileCount < 14 ? true : false;
  }

  updateSingleWait(): void {
    let kongCount: number = 0;
    for (let group of this.hand.tileGroupArray) {
      if (group.tileKeyArray.length === 4)
        kongCount++;
    }

    this.isSingleWait = kongCount === 4 ? false : this.isSingleWait;
    this.isSingleWaitDisabled = kongCount === 4;

  }

  // TODO: This doesn't work!
  resetHand(): void {
    this.hand = this.defaultHand;
    this.flowerTileCount = 0;
    this.isSingleWait = false;
    this.isSingleWaitDisabled = false;
    this.isSeatWind = false;
    this.isPrevalentWind = false;
    this.isLastOfKind = false;
    this.isLastTile = false;
    this.isReplacementTile = false;
    this.isRobbingKong = false;
    this.isMeldedHand = false;
    this.isConcealedHandDiscard = false;
    this.isConcealedHandSelf = false;
    this.updateSubmitButton();
  }
}
