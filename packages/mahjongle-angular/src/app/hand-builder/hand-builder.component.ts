import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Tile } from '../../models/tile.model';
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

  hand: Array<Tile> = new Array(13);
  defaultHand: Array<Tile>;
  isGrouped: boolean = true;
  isSubmitButtonDisabled: boolean = true;

  // Hand info
  // TODO: Turn this into a model
  flowerTileCount: number = 0;
  isSingleWait: boolean = false;
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
    this.hand[0] = new Tile('Back');
    this.hand[1] = new Tile('Back');
    this.hand[2] = new Tile('Back');

    this.hand[3] = new Tile('Back');
    this.hand[4] = new Tile('Back');
    this.hand[5] = new Tile('Back');

    this.hand[6] = new Tile('Back');
    this.hand[7] = new Tile('Back');
    this.hand[8] = new Tile('Back');

    this.hand[9] = new Tile('Back');
    this.hand[10] = new Tile('Back');
    this.hand[11] = new Tile('Back');

    this.hand[12] = new Tile('Back');
    this.hand[13] = new Tile('Back');

    this.defaultHand = [...this.hand];

    // TODO: Eventually be able to take in a hand
  }

  toggleGroup(e: any) {
    this.isGrouped = !this.isGrouped;
  }

  openTilePickerDialog(handIndex: number) {
    const dialogRef = this.dialog.open(TilePickerDialogComponent, {
      data: {
        isGrouped: this.isGrouped,
        isDouble: handIndex === 12
      } as TilePickerDialogData,
      exitAnimationDuration: 500
    });

    dialogRef.afterClosed().subscribe((result: TilePickerDialogResult) => {
      result.tileKeyArray.forEach((tileKey, index) => {


      });
      for (let i = 0; i < result.tileKeyArray.length; i++) {
        const index = this.isGrouped ? handIndex + i : handIndex;
        this.hand[index] = new Tile(result.tileKeyArray[i]);
      }

      if (this.isGrouped) {
        const groupIndex: number = Math.floor(handIndex / 3);
        this.handGroupInformation[groupIndex] = result as GroupInformation;
      }

      this.updateSubmitButton();
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
    for (let tile of this.hand) {
      if (tile.key === 'Back' || tile.key === 'Invalid') {
        this.isSubmitButtonDisabled = true;
        return;
      }
    }

    this.isSubmitButtonDisabled = false;
  }

  resetHand(): void {
    this.hand = this.defaultHand;
    this.updateSubmitButton();
  }
}
