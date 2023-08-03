import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tile, TileGroup, TileHand } from '../../models/tile.model';
import { TileEnum } from '../../models/tile-enums.model';

@Injectable({
  providedIn: 'root'
})
export class TileHandService {

  constructor(private http: HttpClient) {
  }

  getHandScore(hand: TileHand): Observable<number> {
    let score: number = 0;

    console.log(this.prepareHand(hand));

    const httpOptions = {
      headers: new HttpHeaders({ 
        'content-type': 'application/json'
      })
    };

    return this.http.post<number>('/api/Hand/CalculateHandScore', this.prepareHand(hand), httpOptions);
  }

  prepareHand(hand: TileHand): string {
    let result: string = JSON.stringify(hand);
    result = result.replaceAll('tileGroupArray', 'TileGroupList');
    result = result.replaceAll('tileKeyArray', 'TileKeyList');
    // result = result.replaceAll('is', 'Is');
    return result;
  }
}
