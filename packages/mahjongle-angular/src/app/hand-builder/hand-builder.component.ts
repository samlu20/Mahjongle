import { Component } from '@angular/core';

import { Tile } from '../../models/tile.model';

@Component({
  selector: 'app-hand-builder',
  templateUrl: './hand-builder.component.html',
  styleUrls: ['./hand-builder.component.scss']
})
export class HandBuilderComponent {

  hand: Array<Tile> = [];
  isGrouped: boolean = true;
  isTilePickerOpen: boolean = true;

  constructor() {
    this.hand.push(new Tile('1D'));
    this.hand.push(new Tile('2D'));
    this.hand.push(new Tile('3D'));

    this.hand.push(new Tile('4B'));
    this.hand.push(new Tile('5B'));
    this.hand.push(new Tile('6B'));

    this.hand.push(new Tile('7C'));
    this.hand.push(new Tile('8C'));
    this.hand.push(new Tile('9C'));

    this.hand.push(new Tile('NW'));
    this.hand.push(new Tile('NW'));
  }

  toggleGroup(e: any) {
    this.isGrouped = !this.isGrouped;
  }

  openTilePicker() {
    this.isTilePickerOpen = true;
  }

}
