import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Tile } from '../../models/tile.model';
import { TilePickerDialogData } from '../../models/tile-picker-dialog-data.model';
import { TilePickerDialogComponent } from '../tile-picker-dialog/tile-picker-dialog.component';

@Component({
  selector: 'app-hand-builder',
  templateUrl: './hand-builder.component.html',
  styleUrls: ['./hand-builder.component.scss']
})
export class HandBuilderComponent {

  hand: Array<Tile> = new Array(13);
  isGrouped: boolean = true;
  // isTilePickerOpen: boolean = true;

  constructor(private dialog: MatDialog) {
    this.hand[0] = new Tile('1D');
    this.hand[1] = new Tile('2D');
    this.hand[2] = new Tile('3D');

    this.hand[3] = new Tile('4B');
    this.hand[4] = new Tile('5B');
    this.hand[5] = new Tile('6B');

    this.hand[6] = new Tile('7C');
    this.hand[7] = new Tile('8C');
    this.hand[8] = new Tile('9C');

    this.hand[9] = new Tile('1C');
    this.hand[10] = new Tile('2C');
    this.hand[11] = new Tile('3C');

    this.hand[12] = new Tile('NW');
    this.hand[13] = new Tile('NW');
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      for (let i = 0; i < result.length; i++) {
        const index = this.isGrouped ? handIndex + i : handIndex;
        this.hand[index] = new Tile(result[i]);
      }
    });
  }

}
